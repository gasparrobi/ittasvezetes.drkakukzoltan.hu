<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>-->

    <div class="select-wrapper">
      <!--  <select
        name="gyakran-ismetelt-kerdesek"
        id="gyakra-ismetelt-kerdesek"
        v-model="selectedQuestion"
      >
        <option disabled value="">gyakran ismételt kérdések</option>
        <option 
          v-for="item in ittasContent"
          :key="item.slug"
          :value="item.slug">
          {{ item.title }}
        </option>
      </select>-->
    </div>

    <div class="section section-topnav">
      <div class="section-inner">
        <div class="contact-wrapper">
          <email />
          <a
            href="mailto:iroda@drkakukzoltan.hu?subject=Ittas vezetés ügyben érdeklődöm"
            >iroda@drkakukzoltan.hu</a
          >
        </div>
        <div class="contact-wrapper">
          <phone />
          <a href="tel:+36304322665">+36 30 432 2665</a>
        </div>
      </div>
    </div>

    <!-- Roller SECTION -->
    <div class="section section-hero">
      <div class="navigation">
        <a href="/" class="logo">
          <span>ittasvezetes</span>.drkakukzoltan.hu
        </a>
        <nav class="menu">
          <ul>
            <li>
              <a target="_blank" href="https://drkakukzoltan.hu" rel="noopener"
                >egyéb bűncselekmények</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToItem('konzultacio-adatlap')">
                <span>kapcsolat</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ClientOnly>
        <Slide right>
          <g-link class="nav__link" to="/"><span>főoldal</span></g-link>
          <a target="_blank" href="https://drkakukzoltan.hu" rel="noopener">
            <span>egyéb bűncselekmények</span>
          </a>
          <a href="#" @click="scrollToItem('konzultacio-adatlap')">
            <span>kapcsolat</span>
          </a>
        </Slide>
      </ClientOnly>
      <div class="section-inner">
        <h1 class="main-title">
          Ittas állapotban történő elektromos rollerezés akár pénzbüntetéssel és
          járművezetéstől eltiltással is járhat.
        </h1>
        <!-- <h2 class="secondary-title">
          Szakszerű jogi képviselet!
          <br />Kérjen konzultációt még ma!
        </h2> -->
      </div>
    </div>

    <!-- WHY CHOOSE US -->
    <component
      v-for="item in rollerContent"
      :key="item.id"
      :is="item.component"
      :content="item"
      :selected-question="selectedQuestion"
      @cta-click="onCtaClick"
    />

    <contact-form @on-submit="onContactFormSubmit" />

    <contact-methods />
    <ClientOnly>
      <contact-map />
    </ClientOnly>

    <ittas-footer />

    <!--     <div class="section">
     
      <div data-address="121 King Street, Melbourne Victoria 3000 Australia" data-popupstring-id="#popupstring1" class="map-canvas autoload-map"
        data-mapstyle="default" data-height="400" data-latlng="47.511425, 19.052229" data-title="sample title"
        data-zoom="16" data-marker="/static/images/map-marker.png ">
      </div>
      <div class="map-popupstring hidden" id="popupstring1">
        <div class="text-center">
          <h3>Dr. Kakuk Zoltán Dániel ügyvéd</h3>
          <p>1055 Budapest, Szent István körút 17. 3. emelet 4. ajtó</p>
        </div>
      </div>

      <script src="https://maps.google.com/maps/api/js?key=AIzaSyAzf9wE8euXLL9aiSUEBSST1hvufVb_GvU"></script>
      <script src="/static/js/google-map-init.js "></script>
    </div>
    -->
  </Layout>
</template>

<page-query>
  query roller {
    roller: allRoller(sortBy: "id", order: ASC) {
      edges {
        node {
          title
          content,
          slug,
          type,
          id
        }
      }
    }
  }
</page-query>

<script>
import IttasContent from '../components/IttasContent';
import Introduction1 from '../components/Introduction1';
import IntroductionMobile from '../components/IntroductionMobile';
import CallToAction from '../components/CallToAction';
import AlcoholTable from '../components/AlcoholTable';
import IttasFooter from '../components/IttasFooter';
import ContactMethods from '../components/ContactMethods';
import ContactForm from '../components/ContactForm';
import Email from '../assets/images/email.svg';
import Phone from '../assets/images/phone.svg';
import Media from '../components/Media';
import { scrollTo } from '../utils/index';

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};

export default {
  name: 'Roller',

  metaInfo: {
    title: 'Elektromos roller ittas állapotban',

    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Az elektromos roller ittas vezetése miatt indult büntetőeljárás kimenetele számtalan körülménytől függ 2024-ben. Ugyanez vonatkozik az ittas vezetés miatt kiszabható büntetésekre is.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content:
          'Mire számíthatok elektromos roller ittas vezetése esetén? - dr. Kakuk Zoltán Dániel, ügyvéd'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content:
          'Büntetőeljárás indult elektromos roller ittas vezetése miatt Önnel szemben? Ismerje meg a jogait és lehetőségeit, közérthető módon!'
      },
      {
        key: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: '/rollersocial.jpg'
      },
      {
        key: 'og:url',
        name: 'og:url',
        content:
          'https://ittasvezetes.drkakukzoltan.hu/elektromos-roller-ittas-vezetes'
      },
      {
        key: 'og:locale',
        name: 'og:locale',
        content: 'hu_HU'
      },
      {
        charset: 'utf-8'
      }
    ]
  },

  components: {
    IttasContent,
    Introduction1,
    IntroductionMobile,
    CallToAction,
    AlcoholTable,
    IttasFooter,
    ContactMethods,
    ContactForm,
    Email,
    Phone,
    Media,
    ContactMap: () =>
      import('../components/ContactMap')
        .then((ContactMap) => ContactMap)
        .catch(),
    Slide: () =>
      import('vue-burger-menu')
        .then((m) => m.Slide)
        .catch()
  },

  data() {
    return {
      selectedQuestion: '',
      observer: null
    };
  },

  watch: {
    selectedQuestion() {
      this.$router.history.push(`/#${this.selectedQuestion}`);
      this.scrollToItem(this.selectedQuestion);
    }
  },

  computed: {
    rollerContent() {
      if (!this.$page && !this.$page.roller) return [];
      return this.$page.roller.edges.map((edge) => {
        const { title, content, slug, type, id } = edge.node;
        return {
          id,
          title,
          content,
          slug,
          type,
          component: this.getComponent(type)
        };
      });
    }
  },

  mounted() {
    if (this.$route.hash) {
      this.selectedQuestion = this.$route.hash.replace('#', '');
      this.scrollToItem(this.selectedQuestion);
    }
    if (IntersectionObserver) {
      this.observer = new IntersectionObserver(
        this.handleIntersection,
        OBSERVER_OPTIONS
      );
    }
    if (this.observer) {
      const items = document.querySelectorAll('[data-observe="observe"]');
      items.forEach((item) => this.observer.observe(item));
    }
  },

  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    scrollToItem(id) {
      scrollTo(`#${id}`, null, 300, null, -100);
    },

    pushHistoryAndScroll(id) {
      this.$router.history.push(`/#${id}`);
      this.scrollToItem(id);
    },

    getComponent(type) {
      switch (type) {
        case 'rollerContent':
          return 'ittas-content';
          break;
        case 'callToAction':
          return 'call-to-action';
          break;
        default:
          return 'template';
          break;
      }
    },

    onCtaClick() {
      this.sendCtaEvent();
      this.scrollToItem('konzultacio-adatlap');
    },

    onContactFormSubmit() {
      this.sendEvent({
        event_category: 'Contact Form',
        action: 'submit'
      });
    },

    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          this.sendEvent({
            event_category: 'event',
            action: 'view',
            event_label: entry.target.id
          });
          this.observer.unobserve(entry.target);
        }
      });
    },

    onMediaClick() {
      this.sendEvent({
        event_category: 'outbound',
        action: '',
        event_label: 'https://drkakukzoltan.hu/mediamegjelenesek'
      });
    },

    sendEvent({ event_category, action, event_label = '' }) {
      if (this.$gtag) {
        this.$gtag.event(action, {
          event_category,
          event_label
        });
      }
    },

    sendCtaEvent() {
      this.sendEvent({
        event_category: 'CTA',
        action: 'click'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}

.section {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  &-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    padding: 20px 40px;
    margin: 0 auto;

    @include break(mobile) {
      padding: 20px;
    }

    .section-hero & {
      flex-direction: row;
    }
  }

  &-red {
    min-height: 210px;
    background-color: #c54552;
    color: #fff;
  }

  &-topnav {
    background-color: #fff;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    color: #4b4b4b;

    .contact-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 5px;
        transform: scale(0.8);
      }
    }

    .section-inner {
      padding: 5px 40px;
      flex-direction: row;
      justify-content: flex-start;

      @include break(mobile) {
        flex-direction: column;
        align-items: center;
      }

      .contact-wrapper {
        transition: all 200ms;

        & ~ .contact-wrapper {
          margin-left: 20px;

          @include break(mobile) {
            margin-left: 0;
            margin-top: 3px;
          }
        }

        &:hover {
          color: #000;
        }
      }
    }
  }

  &-hero {
    min-height: 300px;
    background-image: linear-gradient(
        90deg,
        rgba(34, 47, 169, 0.83) 0%,
        rgba(187, 53, 66, 0.83) 100%
      ),
      url('../assets/images/ittasroller.webp');
    background-size: cover;
    background-position: bottom;
    position: relative;

    .line-style {
      position: absolute;
      height: 15%;
      left: 0;
      right: 0;
    }

    @include break(mobile) {
      min-height: 500px;
    }

    .navigation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      padding: 20px 40px;
      margin: 0 auto;
      margin-top: 30px;
      color: #fff;

      @include break(mobile) {
        padding: 20px;
      }

      ul {
        display: flex;
        font-size: 13px;
        line-height: 17px;
        font-weight: 600;
        text-transform: uppercase;
        user-select: none;

        @include break(tablet) {
          font-size: 12px;
        }

        @include break(phablet) {
          display: none;
        }

        li {
          cursor: pointer;

          & ~ li {
            margin-left: 30px;
          }

          &::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #fff;
            transition: width 0.3s;
          }

          &:hover::after {
            width: 100%;
            //transition: width .3s;
          }
        }
      }

      .logo {
        padding: 10px 15px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 3px;
        font-size: 13px;
        line-height: 17px;
        text-transform: uppercase;
        font-weight: 700;
        color: #4b4b4b;
        cursor: pointer;

        @include break(mobile) {
          font-size: 12px;
        }

        @include break(mobile-s) {
          font-size: 10px;
        }

        span {
          color: #d74251;
        }
      }
    }
  }

  p.contact-secondary {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;

    @include break(mobile) {
      font-size: 13px;
    }

    a {
      text-decoration: underline;
    }
  }

  .main-title {
    font-size: 25px;
    margin-bottom: 25px;
    text-align: center;
  }

  .secondary-title {
    margin-bottom: 60px;

    @include break(mobile) {
      margin-bottom: 30px;
    }
  }
}
</style>

<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  &-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    padding: 20px 40px;
    margin: 0 auto;

    @include break(mobile) {
      padding: 20px;
    }
  }

  &-red {
    min-height: 210px;
    background-color: #c54552;
    color: #fff;
  }

  &-topnav {
    background-color: #fff;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    color: #4b4b4b;

    .contact-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 5px;
        transform: scale(0.8);
      }
    }

    .section-inner {
      padding: 5px 40px;
      flex-direction: row;
      justify-content: flex-start;

      @include break(mobile) {
        flex-direction: column;
        align-items: center;
      }

      .contact-wrapper {
        transition: all 200ms;

        & ~ .contact-wrapper {
          margin-left: 20px;

          @include break(mobile) {
            margin-left: 0;
            margin-top: 3px;
          }
        }

        &:hover {
          color: #000;
        }
      }
    }
  }
}

.button-cta {
  padding: 20px 30px;
  display: flex;
  width: 100%;
  max-width: 380px;
  align-items: center;
  justify-content: center;
  color: #e04f5d;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  margin: 10px 0;
  transition: all 200ms;
  user-select: none;

  @include break(mobile) {
    font-size: 18px;
    padding: 20px;
  }

  &:hover {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 1);
  }
}

.bm-menu {
  background: #fff;
}

.bm-item-list > * > span {
  color: #e04f5d;
}

.bm-burger-button.bm-burger-button.bm-burger-button {
  display: none;
  right: 20px !important;
  top: 55px;
  height: 25px;

  @include break(phablet) {
    display: block;
  }
}

.bm-burger-bars {
  background-color: #fff;
}

.cta-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cta-title {
  text-transform: uppercase;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 30px;
}

.title {
  color: #2c3e50;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
  line-height: 32px;

  @include break(mobile) {
    font-size: 15px;
    line-height: 26px;
  }

  &:after {
    content: '';
    display: block;
    margin-top: 2px;
    width: 85px;
    height: 3px;
    background: #c54552;
    transition: width 0.3s;
  }

  .content--animate & {
    animation: animateColor 1000ms forwards;
  }
}

@keyframes animateColor {
  0% {
    color: #2c3e50;
  }

  50% {
    color: #c54552;
  }

  100% {
    color: #2c3e50;
  }
}

p {
  margin-top: 15px;
  font-weight: 500;
  font-size: 15px;
  color: #2c3e50;

  .content--animate & {
    animation: animateColor 1000ms forwards;
  }

  @include break(mobile) {
    font-size: 14px;
  }
}
</style>
