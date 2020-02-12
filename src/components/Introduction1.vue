<template>
  <div class="section-wrapper">
    <div class="section">
      <div class="section-inner">
        <div class="empty empty--top">
          <h3>Az ön ügyvédje</h3>
          <p>Dr. Kakuk Zoltán Dániel</p>
        </div>
        <div class="intro">
          <h2 class="title">Miért válasszon engem</h2>
          <p>Közel 7 év gyakorlati tapasztalattal rendelkezem ittas vezetés miatt indult büntetőügyekben, így Ügyfélként - ismerve 2020. évében is a bírói gyakorlatot - Ön őszinte, naprakész, közérthető tájékoztatást kaphat valamennyi felmerülő kérdésére. Az ügyfélközpontúság jegyében Ügyfeleim részére olyan jogi szolgáltatást nyújtok, amelyet fordított esetben én is elvárnék. Így érhető el az Ügyfél-ügyvéd közötti kellő bizalom, mely lehetővé teszi, hogy színvonalas szakmai munka mellett akár olyan eredmény születhessen, amely az Ügyfél érdekének maximálisan megfelel. Ne feledje: az Ön érdeke, az én érdekem is.</p>
        </div>
      </div>
    </div>

    <div class="section section-red">
      <div class="section-inner">
        <div class="empty empty--middle">
          <div class="block">
            <img class="person" src="~../assets/images/drkakukzoltan.jpg" width="275" alt="Dr. Kakuk Zoltán Dániel - ittas vezetés ügyvéd" />
          </div>
        </div>
        <div class="cta-wrapper">
          <h2 class="cta-title">vezetői engedélye érdekében ne késlekedjen ügyvédhez fordulni!</h2>
          <button type="button" class="button-cta" @click="$emit('cta-click')">konzultációt kérek</button>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-inner">
        <div class="empty empty--bottom">
          <a href="tel:+36304322665">+36 30 432 2665</a>
          <a href="mailto:iroda@drkakukzoltan.hu">iroda@drkakukzoltan.hu</a>
        </div>
        <div class="box-wrapper">
          <div class="box">
            <tapasztalat />
            <span>Közel 7 év tapasztalat</span>
          </div>
          <div class="box">
            <szakertelem />
            <span>Szakértelem</span>
          </div>
          <div class="box">
            <tajekoztatas />
            <span>Naprakész tájékoztatás</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tapasztalat from '../assets/images/tapasztalat.svg';
import Szakertelem from '../assets/images/szakertelem.svg';
import Tajekoztatas from '../assets/images/tajekoztatas.svg';

export default {
  name: 'Introduction',

  components: {
    Tapasztalat,
    Szakertelem,
    Tajekoztatas
  }

}
</script>

<style lang="scss" scoped>
.section-wrapper {
  overflow: hidden;
  padding: 80px 0;

  @include break(phablet) {
    display: none;
  }
}

.section-inner {
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
}

.section-red {
  min-height: 300px;
  background-color: #C54552;
  color: #fff;

  .section-inner {
    justify-content: center;
  }
}

.intro {
  margin-bottom: 20px;
}

.empty {
  width: 300px;
  min-width: 300px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & * {
    z-index: 2;
  }

  h3 {
    color: #E04F5D;
    font-weight: 800;
    font-size: 22px;
    line-height: 27px;
    text-transform: uppercase;
  }

  p {
    font-weight: 800;
    font-size: 15px;
    line-height: 18px;
    color: #2C3E50;
    text-transform: uppercase;
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 300px;
    height: 100%;
    top: 0;
    background: #fff;
    border: 5px solid #949494;
  }

  &--top {
    &:before {
      border-bottom: none;
    }
  }

  &--middle {
    &:before {
      border-top: none;
      border-bottom: none;
    }
  }

  &--bottom {
    padding: 20px 30px;

    a {
      margin: 10px 0;
      font-weight: 800;
      font-size: 22px;
      line-height: 27px;
      text-align: center;
      text-decoration-line: underline;
      text-transform: uppercase;
      color: #2C3E50;

      &:nth-of-type(2) {
        font-size: 16px;
      }
    }

    &:before {
      border-top: none;
      box-shadow: 0px 15px 22px 2px rgba(0,0,0,.1)
    }
  }

  .block {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .person {
    position: absolute;
    right: 5px;
    bottom: -20px;
  }
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

  @include break(tablet) {
    font-size: 24px;
    line-height: 32px;
  }

  @include break(phablet) {
    font-size: 22px;
    line-height: 28px;
  }
}

.title {
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

.box-wrapper {
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 20px 20px 20px 0;
  justify-content: space-between;
  width: 100%;

  .box {
    flex: 1;
    flex-direction: column;
    max-width: 215px;
    height: 100%;
    background-color: #fff;
    /* border: 5px solid #949494; */
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px 10px;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 16px;
    line-height: 26px;
    color: #2C3E50;
    box-shadow: 0px 15px 22px 2px rgba(0,0,0,.1);

    svg {
      height: 40px;
      margin-bottom: 15px;
    }

    & ~.box {
      margin-left: 10px;

      @include break(tablet) {
        margin-left: 5px;
      }
    }

    @include break(tablet) {
      font-size: 12px;
    }

    @include break(phablet) {
      font-size: 12px;
    }

    @include break(mobile) {
      display: none;
    }
    
  }
}


</style>