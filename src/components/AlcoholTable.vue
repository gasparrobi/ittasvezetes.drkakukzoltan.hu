<template>
  <div class="section">
    <div class="section-inner">
      <section
        :id="content.slug"
        class="content"
      >
        <h2
          class="title"
        >
          {{ content.title }}
        </h2>
        
        <div class="table-wrapper">
          <div class="table">
            <div
              v-for="(item, index) in alcoholLevels"
              :key="index" 
              class="table-row"
            >
              <div class="table-row-item key">{{ item.level }}</div>
              <div class="table-row-item value">{{ item.value }}</div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  </div>    
</template>
<script>
export default {
  name: 'AlcoholTable',

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

  data() {
    return {
      airLevels: [
        {level: '0.1 mg/l alatt', value: 'az alkoholfogyasztás nem bizonyítható'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'ivott de alkoholosan nem befolyásolt'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'igen enyhe'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'enyhe'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'közepes'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'súlyos'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'igen súlyos'}
      ],
      blood: [
        {level: '0.1 mg/l alatt', value: 'az alkoholfogyasztás nem bizonyítható'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'ivott de alkoholosan nem befolyásolt'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'igen enyhe'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'enyhe'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'közepes'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'súlyos'},
        {level: '0.1 mg/l - 0.25 mg/l', value: 'igen súlyos'}
      ]
    }
  },

  computed: {
    alcoholLevels () {
      return this.content.content === 'legalkohol' ? this.airLevels : this.bloodLevels;
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

.table-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.table {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #fff;
  max-width: 800px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0px 15px 22px 2px rgba(0,0,0,.1);

  @include break(mobile) {
    min-width: 100vw;
    padding: 10px;
    border-radius: 0px;
  }

  &-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;

    @include break(mobile) {
      margin: 10px 0;
    }

    &-item {
      margin: 0 20px;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      text-align: center;

      @include break(mobile) {
        font-size: 12px;
        line-height: 16px;
        margin: 0 10px;
      }
    }

    .key {
      color: #2C3E50;
      flex: 2;
    }

    .value {
      flex: 3;
      padding: 15px;
      color: #fff;
      background: #C54552;
      border-radius: 5px;
      width: 40%;
      min-width: 190px;
    }
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