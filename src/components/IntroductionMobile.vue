<template>
<div class="section-wrapper">
    <div class="section">
      <div class="section-inner">
        <div class="intro">
          <h2 class="title">Miért válasszon minket</h2>
          <p>Közel 7 év jogi elméleti és gyakorlati tapasztalattal rendelkezünk ittas járművezetéses büntetőügyekben. A praxisom kiemelt szakterületét képezi az ittas járművezetés, így Ügyfélként ön őszinte, naprakész, közérthető tájékoztatást kaphat minden felmerülő kérdésére. Az ügyfélközpontúság jegyében mi azt nyújtjuk Ügyfeleink részére, amit fordított esetben mi is elvárnánk!</p>
        </div>


        <div class="intro-image">
          <h3>Az ön ügyvédje</h3>
          <p>Dr. Kakuk Zoltán Dániel</p>
          <img class="person" src="~../assets/images/drkakukzoltan.jpg" alt="Dr. Kakuk Zoltán Dániel - ittas vezetés ügyvéd" />
        </div>

      </div>
    </div>

    <div class="section section-red">
      <div class="section-inner">
        <div class="cta-wrapper">
          <h2 class="cta-title">vezetői engedélye érdekében ne késlekedjen ügyvédhez fordulni!</h2>
          <button type="button" class="button-cta">konzultációt kérek</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IntroductionMobile',

  data() {
    return {
      content: {

      }
    }
  }
    
}
</script>
<style lang="scss" scoped>
.section {
  display: none;

  @include break(phablet) {
    display: block;
  }
}

.intro {
  margin-bottom: 20px;
}

.intro-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  background: #fff;
  border: 5px solid #949494;
  margin: 30px 0;

  img {
    width: 100%;
    margin-top: 30px;
  }

  h3 {
    color: #E04F5D;
    font-weight: 800;
    font-size: 22px;
    line-height: 27px;
    text-transform: uppercase;
    margin: 30px 10px 10px 10px;
  }

  p {
    font-weight: 800;
    font-size: 15px;
    line-height: 18px;
    color: #2C3E50;
    text-transform: uppercase;
    margin: 10px;
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
    font-size: 22px;
    line-height: 28px;
  }

  @include break(mobile-s) {
    font-size: 20px;
    line-height: 26px;
  }
}

.button-cta {
  max-width: 330px;
  flex: 1 1 30%;
}
</style>