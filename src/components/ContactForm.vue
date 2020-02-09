<template>
  <div class="section">
    <div class="section-inner">

      <h1 class="title">Visszahíváshoz kérem töltse ki az alábbi adatlapot</h1>

      <!-- <validation-provider rules="required" v-slot="{ errors }">
        <input v-model="value" name="myinput" type="text" />
        <span>{{ errors[0] }}</span>
      </validation-provider> -->

      <ValidationObserver ref="observer">
        <form @submit.prevent="onSubmit">
          
          <div class="section-wrapper">
            <h2 class="form-title">E-mail cím:</h2>

              <validation-provider class="touch-wrapper" mode="lazy" name="email" rules="required|email" v-slot="{ errors, failed }">
                <input
                  type="email"
                  :class="[{ 'invalid': failed }]"
                  v-model="email"
                >
                <span class="error-field">{{ errors[0] }}</span>
              </validation-provider>

          </div>
          
          <div class="section-wrapper">
            <h2 class="form-title">Ittas vezetés elkövetésekor:</h2>

              <validation-provider class="touch-wrapper" rules="required" v-slot="{ errors, failed }">
                <input type="text" class="hidden" v-model="accident">
                <div 
                  :class="['touch', { 'touch-invalid': failed, 'touch-selected': accident === 'accident' }]"
                  @click="accident = 'accident'"
                >
                  <car class="svg-icon"/>
                  <span>nem történt baleset / sérülés</span>
                </div>
                <div
                  :class="['touch', { 'touch-invalid': failed, 'touch-selected': accident === 'no accident' }]"
                  @click="accident = 'no accident'"
                >
                  <accident class="svg-icon"/>
                  <span>Történt baleset / sérülés</span>
                </div>
                <span class="error-field">{{ errors[0] }}</span>
              </validation-provider>

          </div>

          <div class="seciont-wrapper">
            <h2 class="form-title">Alkoholszint mérésének módja:</h2>
            <validation-provider class="touch-wrapper" rules="required" v-slot="{ errors, failed }">
              <input type="text" class="hidden" v-model="sampleType">
              <div 
                :class="['touch', { 'touch-invalid': failed, 'touch-selected': sampleType === 'szonda' }]"
                @click="sampleType = 'szonda'"
              >
                <breathalyzer class="svg-icon"/>
                <span>csak szondáztatás</span>
              </div>
              <div 
                :class="['touch', { 'touch-invalid': failed, 'touch-selected': sampleType === 'ver-vizelet' }]"
                @click="sampleType = 'ver-vizelet'"
              >
                <syringe class="svg-icon"/>
                <span>vér / vizelet vétel</span>
              </div>
              <span class="error-field">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <div class="section-wrapper">
            <h2 class="form-title">Alkohol szint értéke:</h2>
            <validation-provider class="touch-wrapper" rules="required" v-slot="{ errors, failed }">
              <input type="text" class="hidden" v-model="bloodLevel">
              <div
                v-for="item in alcoholValues"
                :key="item"
                :class="['touch', 'touch-mini', { 'touch-invalid': failed, 'touch-selected': bloodLevel === item }]"
                @click="bloodLevel = item"
              >
                <span>{{ item }}</span>
              </div>
              <span class="error-field">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <button type="submit" >Submit</button>
        </form>
      </ValidationObserver>

    </div>
  </div>  
</template>
<script>
import Car from '../assets/images/car.svg';
import Accident from '../assets/images/accident.svg';
import Breathalyzer from '../assets/images/breathalyzer.svg';
import Syringe from '../assets/images/syringe.svg';

export default {
  name: 'ContactForm',

  components: {
    Car,
    Accident,
    Breathalyzer,
    Syringe
  },

  data() {
    return {
      airAlcoholValues: [
        "nem tudom",
        "0.1 mg/l alatt",
        "0.11 mg/l - 0.25 mg/l",
        "0.26 mg/l - 0.4 mg/l",
        "0.41 mg/l - 0.75 mg/l",
        "0.76 mg/l - 1.25 mg/l",
        "1.26 mg/l - 1.75 mg/l",
        "1.76 mg/l fölött"
      ],
      bloodAlcoholValues: [
        "nem tudom",
        "0.2 g/l alatt",
        "0.21 g/l - 0.5 g/l",
        "0.51 g/l - 0.8 g/l",
        "0.81 g/l - 1.5 g/l",
        "1.51 g/l - 2.5 g/l",
        "2.51 g/l - 3.5 g/l",
        "3.5 g/l fölött"
      ],
      email: '',
      accident: '',
      sampleType: '',
      bloodLevel: ''
    }
  },

  computed: {
    alcoholValues() {
      return this.sampleType === 'szonda' ? this.airAlcoholValues : this.bloodAlcoholValues;
    }
  },

  methods: {
    async onSubmit() {
      const result = await this.$refs.observer.validate();
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  background: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
}

.section-wrapper {
  margin: 40px 0;
}

.form-title {
  color: #2C3E50;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  margin: 5px 0;
}

.touch-wrapper {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  input {
    width: 100%;
    max-width: 300px;
    height: 45px;
    border: 2px solid #2C3E50;
    padding: 5px 10px;
    border-radius: 5px; 

    &:focus {
      outline: none;
    }

    &.invalid {
      border-color: red;
    }
  }

  .error-field {
    position: absolute;
    bottom: -22px;
    left: 7px;
    font-size: 12px;
    color: red;
    font-weight: 700;
    text-transform: uppercase;
  }

  input.hidden {
    display: none;
  }
}

.touch-wrapper-column {
  flex-direction: column;
}

.touch {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 141px;
  height: 120px;
  padding: 10px;
  border: 2px solid #2C3E50;
  border-radius: 5px;
  margin: 5px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 300ms;

  @include break(mobile) {
    font-size: 10px;
    width: 130px;
  }

  &-invalid {
    border-color: red;
  }

  &-selected {
    color: #fff;
    background-color: #C54552;
    border: 2px solid #C54552;

    span {
      color: #fff;
    }
  }
}

.touch-mini {
  height: 60px;
  width: 120px;
  text-transform: none;
}

.touch:hover {
  /* stroke:  #5c4de0;
  color:  #5c4de0; */
  /* stroke: #7d72e0;
  color: #7d72e0; */
  color: #fff;
  background-color: #C54552;
  border: 2px solid #C54552;

  span {
    color: #fff;
  }
}

.touch:hover .svg-icon {
  fill: currentColor
}

.touch.touch-selected {
  span {
    color: #fff;
  } 
  
  .svg-icon {
    fill: currentColor;
  }
}

.touch span {
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2C3E50;
}

.svg-icon {
  /* max-width: 55px;
  width: 55px; */
  margin-bottom: 5px;
  fill: #2C3E50;
  min-height: 50px;
  max-height: 50px;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 800;
  color: #2C3E50;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border: 2px solid;
  border-radius: 5px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #C54552;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #C54552;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>