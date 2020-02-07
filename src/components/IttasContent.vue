<template>
    <div class="content">
      <h2 class="title">{{ content.title }}</h2>
      <p>{{ content.content }}</p>
    </div>
</template>
<script>
export default {
  name: "IttasContent",
  props: {
    content: {
      type: Object,
      default: (()=>{})
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  margin: 25px 0;
}
h2.title {
  color: #2C3E50;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
  line-height: 32px;

  @include break(mobile) {
    font-size: 16px;
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
}

p {
  margin-top: 15px;
  font-weight: 500;
  font-size: 15px;
  color: #2C3E50;

  @include break(mobile) {
    font-size: 14px;
  }
}

</style>