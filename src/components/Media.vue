<template>
  <div class="section">
    <div class="section-inner">
      <div class="title media-title">Médiamegjelenések</div>
      <a
        class="images-wrapper"
        href="https://drkakukzoltan.hu/mediamegjelenesek"
        @click="$emit('media-click')"
        target="_blank"
        rel="noopener"
      >
        <div class="image">
          <g-image src="~/assets/images/logo_rtl.png" alt="rtl klub logo" />
        </div>
        <div class="image">
          <g-image src="~/assets/images/logo_tv2.png" alt="tv2 logo" />
        </div>
        <div class="image">
          <g-image src="~/assets/images/logo_24hu.png" alt="24.hu logo" />
        </div>
        <div class="image">
          <g-image src="~/assets/images/logo_hvg.png" alt="hvg.hu logo" />
        </div>
        <div class="image">
          <g-image src="~/assets/images/logo_blikk.png" alt="blikk logo" />
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Media",

  data() {
    return {
      logos: [
        "logo_rtl.png",
        "logo_tv2.png",
        "logo_24.png",
        "logo_hvg.png",
        "logo_blikk.png"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.section {
  background: #fff;
  text-align: center;
  box-shadow: 0px 5px 22px 1px rgba(0, 0, 0, 0.1);

  .section-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .media-title {
    margin-bottom: 15px;
    color: #2c3e50;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 15px;
    line-height: 22px;

    &:after {
      width: 100%;
    }

    @include break(mobile) {
      font-size: 13px;
    }
  }

  .images-wrapper {
    padding: 20px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    @include break(phablet) {
      padding: 10px 0;
      margin-bottom: 0;
    }
  }

  .image {
    max-height: 50px;
    height: 100%;
    padding: 0 10px;

    img {
      max-height: 50px;
      width: auto;
    }
  }
}
</style>