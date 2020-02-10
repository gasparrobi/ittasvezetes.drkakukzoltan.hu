<template>
  <div class="section">
    <div class="section-inner">
      <section
        :id="content.slug"
        class="content"
        data-observe="observe"
      >
        <h1
          class="title"
          @click="share"
        >{{ content.title }}</h1>
        <p>{{ content.content }}</p>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "IttasContent",
  props: {
    content: {
      type: Object,
      default: (()=>{})
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
    animate () {
      setTimeout(() => {
        this.$el.classList.add('content--animate');
      }, 1000);
    },

    share () {
      if (navigator.share) {
        navigator.share({
          title: this.content.title,
          url: window.location.hash
        }).then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.section-inner {
  padding: 30px 40px;

  @include break(mobile) {
    padding: 20px;
  }
}

.title {
  color: #2C3E50;
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
    background: #C54552;
    transition: width .3s;
  }

  .content--animate & {
    animation: animateColor 1000ms forwards;
  }
}

@keyframes animateColor {
  0% {
    color: #2C3E50;
  }

  50% {
    color: #C54552;
  }

  100% {
    color: #2C3E50;
  }
}

p {
  margin-top: 15px;
  font-weight: 500;
  font-size: 15px;
  color: #2C3E50;

  .content--animate & {
    animation: animateColor 1000ms forwards;
  }

  @include break(mobile) {
    font-size: 14px;
  }
}

</style>