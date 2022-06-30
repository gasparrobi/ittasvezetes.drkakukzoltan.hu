<template>
  <div class="section">
    <div class="section-inner">
      <section :id="content.slug" class="content" data-observe="observe">
        <h2 class="title" @click="share">{{ content.title }}</h2>
        <div class="content-inner" v-html="content.content"></div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IttasContent',
  props: {
    content: {
      type: Object,
      default: () => {}
    },

    selectedQuestion: {
      type: String,
      default: ''
    }
  },

  watch: {
    selectedQuestion() {
      this.$el.classList.remove('content--animate');
      if (this.selectedQuestion === this.content.slug) {
        this.animate();
      }
    }
  },

  methods: {
    animate() {
      setTimeout(() => {
        this.$el.classList.add('content--animate');
      }, 1000);
    },

    share() {
      if (navigator.share) {
        navigator
          .share({
            title: this.content.title,
            url: window.location.hash
          })
          .then(() => {
            console.log('Thanks for sharing!');
          })
          .catch(console.error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.section-inner {
  padding: 20px 40px;

  @include break(mobile) {
    padding: 20px;
  }
}

.content .content-inner li {
  position: relative;
  margin: 3px 0;
  display: none;
}

.title {
  color: #2c3e50;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 16px;
  line-height: 32px;

  @include break(mobile) {
    font-size: 14px;
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

.content-inner {
  margin-top: 15px;
  font-weight: 500;
  font-size: 14px;
  color: #2c3e50;

  .content--animate & {
    animation: animateColor 1000ms forwards;
  }

  @include break(mobile) {
    font-size: 13px;
  }
}
</style>
