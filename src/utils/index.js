/**
 * Get coordinates, works with absolute/relative positioned elements too
 * @param el
 * @return {{top: number, left: number}}
 */
export function getCoords (el, scrollOnElement) {
  // crossbrowser version
  const box = el.getBoundingClientRect();
  const body = document.body;
  const docEl = document.documentElement;
  const scrollTop = scrollOnElement
    ? scrollOnElement.scrollTop
    : window.pageYOffset || docEl.scrollTop || body.scrollTop || 0;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft || 0;
  const clientTop = (scrollOnElement && scrollOnElement.clientTop) || docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;
  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;
  return {
    top: Math.round(top),
    left: Math.round(left)
  };
}

function easeOutExp (t, b, c, d) {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}

export function scrollTo (to, callback, duration = 500, element, gap = 0) {
  const MARKER_CLASS = 'auto-scrolling';
  // result of a wrong selector
  if (to === null) {
    return;
  }
  // it works with one param only, because mindreading
  if (typeof to === 'object' && to.to && arguments.length === 1) {
    callback = to.callback;
    duration = to.duration || duration;
    gap = to.gap || gap;
    element = to.scrollOnElement || null;
    to = to.to;
  }
  // a string that looks kinda like a selector
  if (typeof to === 'string' && to.startsWith('#')) {
    const selector = to.replace(/^#/, '');
    to = document.getElementById(selector);
    if (!to) {
      /* log.warn(`scrollTo: "${selector}" element id not found.`); */
      return;
    }
  }
  let cancelOnWheel = false;
  const scrollHandler = () => {
    cancelOnWheel = true;
    window.removeEventListener('wheel', scrollHandler);
    window.removeEventListener('drag', scrollHandler, false);
    window.removeEventListener('touchstart', scrollHandler, false);
  };
  window.addEventListener('wheel', scrollHandler);
  window.addEventListener('drag', scrollHandler, false);
  window.addEventListener('touchstart', scrollHandler, false);
  if (to instanceof HTMLElement) {
    to = getCoords(to, element).top;
  }
  if (gap) {
    to += gap;
  }
  // eslint-disable-next-line arrow-body-style
  const requestAnimFrame = (() => {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (cb) {
        setTimeout(cb, 1000 / 60);
      }
    );
  })();
  function move (amount) {
    if (element) {
      element.scrollTop = amount;
      return;
    }
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  }
  function position () {
    if (element) {
      return element.scrollTop;
    }
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
  }
  const start = position();
  const change = to - start;
  let currentTime = 0;
  const increment = 20;
  // false or zero defaults to 40
  if (!duration) {
    duration = 40;
  }
  const animateScroll = () => {
    currentTime += increment;
    const val = easeOutExp(currentTime, start, change, duration);
    move(val);
    if (currentTime < duration && !cancelOnWheel) {
      requestAnimFrame(animateScroll);
    } else {
      document.body.classList.remove(MARKER_CLASS);
      if (typeof callback === 'function') {
        callback();
      }
    }
  };
  document.body.classList.add(MARKER_CLASS);
  animateScroll();
}
