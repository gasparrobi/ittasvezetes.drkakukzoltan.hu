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
    </p> -->

    <div class="section section-topnav">
      <div class="section-inner">
        <a href="mailto:iroda@drkakukzoltan.hu">iroda@drkakukzoltan.hu</a>
        <a href="tel:+36304322665">+36 30 432 2665</a>
      </div>
    </div>
    
    <!-- HERO SECTION -->
    <div class="section section-hero">
      <div class="navigation">
        <div class="logo"><span>ittasvezetes</span>.drkakukzoltan.hu</div>
        <nav class="menu">
          <ul>
            <li>alkoholszint táblázat</li>
            <li>egyéb bűncselekmények</li>
            <li>kapcsolat</li>
          </ul>
        </nav>
      </div>
      <div class="section-inner">
        <h1 class="main-title">Ha ittas vezetés miatt ügyvédet keres</h1>
        <h2 class="secondary-title">Kérjen visszahívást email-ben!<br>Még akár aznap visszahívom!</h2>
        <button type="button" class="button-cta">visszahívást kérek</button>
        <p class="contact-secondary">vagy keressen a <a href="tel:+36304322665">+36 30 432 2665</a> számon</p>
      </div>
    </div>

    <!-- WHY CHOOSE US -->
    <div class="section section-first">
      <div class="section-inner">
        <ittas-content 
          v-for="(item, index) in ittasContent"
          :key="index"
          :content="item"
        />
      </div>
    </div>

  </Layout>
</template>

<page-query>
  query content {
    content: allContent {
      edges {
        node {
          title
          content
        }
      }
    }
  }
</page-query>

<script>
import IttasContent from '../components/IttasContent';

export default {
  name: 'index',

  metaInfo: {
    title: 'Hello, world!'
  },

  components: {
    IttasContent
  },

  computed: {
    ittasContent () {
      return this.$page.content.edges.map(edge => {
        return {
          title: edge.node.title,
          content: edge.node.content
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
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
  }

  &-topnav {
    background-color: #fff;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    color: #4B4B4B;

    .section-inner {
      padding: 5px 40px;
      flex-direction: row;
      justify-content: flex-start;

      @include break(mobile) {
        flex-direction: column;
        align-items: center;
      }

      a {
        transition: all 200ms;

        &~a {
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
    min-height: 600px;
    background-image: linear-gradient(90deg, rgba(34, 47, 169, 0.83) 0%, rgba(187, 53, 66, 0.83) 100%), url('../assets/images/hero-img.jpg');
    background-size: cover;
    background-position: center;

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

        @include break(mobile) {
          display: none;
        }

        li {
          cursor: pointer;

          &~ li {
            margin-left: 30px;
          }

          &::after {
              content: '';
              display: block;
              width: 0;
              height: 2px;
              background: #fff;
              transition: width .3s;
          }

          &:hover::after {
              width: 100%;
              //transition: width .3s;
          }
        }
      }

      .logo {
        padding: 10px 15px;
        background-color: #fff;
        border-radius: 3px;
        font-size: 13px;
        line-height: 17px;
        text-transform: uppercase;
        font-weight: 700;
        color: #4B4B4B;
        cursor: pointer;

        @include break(mobile) {
          font-size: 12px;
        }

        span {
          color: #D74251;
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
    color: #E04F5D;
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
    margin-bottom: 25px;
  }

  .secondary-title {
    margin-bottom: 60px;

    @include break(mobile) {
      margin-bottom: 30px;
    }
  }
}
</style>
