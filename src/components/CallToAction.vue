<template>
  <div class="section section-red">
    <div class="section-inner">
      <div class="cta-wrapper">
        <h2 class="cta-title">tudja meg most jogait és lehetőségeit! legyen tisztábaN a következményekkel!</h2>
        <button type="button" class="button-cta">visszahívást kérek</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CallToAction'
}
</script>

<style lang="scss" scoped>
.section-red {
  margin: 30px 0;
}

.cta-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.cta-title {
  text-transform: uppercase;
  font-size: 28px;
  line-height: 37px;
  margin: 30px 0;
  flex: 1 1 70%;

  @include break(tablet) {
    font-size: 24px;
    line-height: 29px;
  }

  @include break(mobile-s) {
    font-size: 22px;
    line-height: 26px;
  }
}

.button-cta {
  max-width: 330px;
  flex: 1 1 30%;
}

</style>