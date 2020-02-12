<template>
  <div class="section" id="konzultacio-adatlap" data-observe="observe">
    <div class="section-inner">

      <h1 class="title">Konzultációhoz kérem töltse ki az alábbi adatlapot</h1>

      <!-- <validation-provider rules="required" v-slot="{ errors }">
        <input v-model="value" name="myinput" type="text" />
        <span>{{ errors[0] }}</span>
      </validation-provider> -->

      <ValidationObserver ref="observer">
        <form @submit.prevent="onSubmit">
          
          <div class="section-horizontal">
            <div class="section-wrapper">
              <h2 class="form-title">Név</h2>

                <div class="touch-wrapper" name="name">
                  <input
                    type="text"
                    v-model="formData.name"
                    placeholder="pl: Kovács Péter"
                  >
                </div>

            </div>

            <div class="section-wrapper">
              <h2 class="form-title">E-mail cím</h2>

                <validation-provider class="touch-wrapper" mode="lazy" name="email" v-slot="{ errors, failed }">
                  <input
                    type="email"
                    :class="[{ 'invalid': failed }]"
                    v-model="formData.email"
                    placeholder="pl: kovacspeter@gmail.com"
                  >
                  <span class="error-field">{{ errors[0] }}</span>
                </validation-provider>

            </div>
            
            <div class="section-wrapper">
              <h2 class="form-title">Telefonszám*</h2>

                <validation-provider class="touch-wrapper" mode="lazy" name="phone" rules="required" v-slot="{ errors, failed }">
                  <input
                    type="phone"
                    :class="[{ 'invalid': failed }]"
                    v-model="formData.phone"
                    placeholder="pl: 063012345678"
                  >
                  <span class="error-field">{{ errors[0] }}</span>
                </validation-provider>

            </div>
          </div>

          <!-- <div class="section-wrapper">
            <h2 class="form-title">Ittas vezetés elkövetésekor:</h2>

              <validation-provider class="touch-wrapper" rules="required" v-slot="{ errors, failed }">
                <input type="text" class="hidden" v-model="formData.accident">
                <div 
                  :class="['touch', { 'touch-invalid': failed, 'touch-selected': formData.accident === 'accident' }]"
                  @click="formData.accident = 'accident'"
                >
                  <car class="svg-icon"/>
                  <span>nem történt baleset / sérülés</span>
                </div>
                <div
                  :class="['touch', { 'touch-invalid': failed, 'touch-selected': formData.accident === 'no accident' }]"
                  @click="formData.accident = 'no accident'"
                >
                  <accident class="svg-icon"/>
                  <span>Történt baleset / sérülés</span>
                </div>
                <span class="error-field">{{ errors[0] }}</span>
              </validation-provider>

          </div> -->

          <div class="section-wrapper">
            <h2 class="form-title">Alkoholszint mérésének módja*</h2>
            <validation-provider class="touch-wrapper" rules="required" v-slot="{ errors, failed }">
              <input type="text" class="hidden" v-model="formData.sampleType">
              <div 
                :class="['touch', { 'touch-invalid': failed, 'touch-selected': formData.sampleType === 'szonda' }]"
                @click="formData.sampleType = 'szonda'"
              >
                <breathalyzer class="svg-icon"/>
                <span>csak szondáztatás</span>
              </div>
              <div 
                :class="['touch', { 'touch-invalid': failed, 'touch-selected': formData.sampleType === 'ver-vizelet' }]"
                @click="formData.sampleType = 'ver-vizelet'"
              >
                <syringe class="svg-icon"/>
                <span>vér / vizelet vétel</span>
              </div>
              <span class="error-field">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <div class="section-wrapper">
            <h2 class="form-title">{{ alcoholTitle }}*</h2>
            <validation-provider class="touch-wrapper" rules="required" v-slot="{ errors, failed }">
              <input type="text" class="hidden" v-model="formData.bloodLevel">
              <div
                v-for="item in alcoholValues"
                :key="item"
                :class="['touch', 'touch-mini', { 'touch-invalid': failed, 'touch-selected': formData.bloodLevel === item }]"
                @click="formData.bloodLevel = item"
              >
                <span>{{ item }}</span>
              </div>
              <span class="error-field">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <div class="section-wrapper">
            <h2 class="form-title">Üzenet</h2>
              <div class="touch-wrapper">
                <textarea
                  type="text"
                  v-model="formData.message"
                  placeholder="Ide írja üzenetét"
                />
              </div>
          </div>

          <button type="submit" class="button-cta">
            <span v-if="!isLoading">KÜLDÉS</span>
            <span v-else class="spinner"></span>
          </button>

          <span class="gdpr" style="position:relative;">Jelen üzenetem megküldésével egyidejűleg az Általános Adatvédelmi Rendelet (GDPR) 6. cikk (1) bekezdés a) pontja, továbbá a 7. cikk rendelkezése alapján - tudomásul veszem, hogy az adatkezelő, azaz dr. Kakuk Zoltán Dániel ügyvéd a most - önkéntesen - megadott személyes adataimat a GDPR és az Infotv. vonatkozó és releváns feltételei szerint, jelen jogi szolgáltatás céljaival összefüggésben, kizárólag a kapcsolatfelvétel megkönnyítése érdekében kezeli. Az űrlap kitöltése az érintettek azonosítását harmadik fél számára nem teszi lehetővé, a fenti adatok megismerésére kizárólag az adatkezelő jogosult, a személyes adatok biztonsága technikai intézkedések alkalmazásával megfelelően biztosítva van. Az űrlap beküldésével egyidejűleg tudomásul veszem, hogy a személyes adataim kezelését az adatkezelő felé jelzett írásos bejelentésemmel visszavonhatom.</span>
        </form>
      </ValidationObserver>

    </div>

    <transition name="modal">
      <modal
        v-if="isModalVisible"
        @close="isModalVisible = false"
        :header-label="headerLabel"
        :body-label="bodyLabel"
      />
    </transition>
  </div>  
</template>
<script>
import axios from 'axios';
import to from 'await-to-js';
import Car from '../assets/images/car.svg';
import Accident from '../assets/images/accident.svg';
import Breathalyzer from '../assets/images/breathalyzer.svg';
import Syringe from '../assets/images/syringe.svg';
import Modal from './Modal';

export default {
  name: 'ContactForm',

  components: {
    Car,
    Accident,
    Breathalyzer,
    Syringe,
    Modal
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
      formData: this.defaultData(),
      isModalVisible: false,
      headerLabel: 'Sikeres üzenetküldés',
      bodyLabel: 'Hamarosan keresni fogom!',
      isLoading: false
    }
  },

  computed: {
    alcoholValues() {
      return this.formData.sampleType === 'szonda' ? this.airAlcoholValues : this.bloodAlcoholValues;
    },

    alcoholTitle () {
      return this.formData.sampleType !== 'szonda' ? 'Légalkoholszint értéke' : 'Véralkoholszint értéke'
    }
  },

  methods: {
    defaultData () {
      return {
        name: '',
        email: '',
        phone: '',
        accident: '',
        sampleType: '',
        bloodLevel: '',
        message: ''
      }
    },

    async onSubmit() {
      this.$emit('on-submit');
      const result = await this.$refs.observer.validate();
      if (!result) return;

      
      
      const params = new URLSearchParams();
      params.append('nev', this.formData.name);
      params.append('email', this.formData.email);
      params.append('uzenet', this.formData.message);
      params.append('meres-modja', this.formData.sampleType);
      params.append('alkohol-szint', this.formData.bloodLevel);
      params.append('telefonszam', this.formData.phone);

      this.isLoading = true;
      const [error, response] = await to(axios.post('https://script.google.com/a/drkakukzoltan.hu/macros/s/AKfycbxJ_zOuqa8ZpPYszmqrjVXvgAWJcfX5-L5gzMdl/exec', params));
      this.isLoading = false;

      this.formData = this.defaultData();
      this.$refs.observer.reset();

      if (error) {
        this.headerLabel = 'Sikertelen üzenetküldés';
        this.bodyLabel = 'Váratlan hiba miatt nem sikerült az üzenetküldés, kérem próbáljon meg emailben vagy telefonon felkeresni';
        this.isModalVisible = true;
        return;
      }

      this.isModalVisible = true;

    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  background: #fff;
  padding-top: 60px;
  padding-bottom: 60px;
  margin: 30px 0;

  .button-cta {
    background-color: #C54552;
    color: #fff;

    .spinner {
      content: " ";
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gdpr {
  display: block;
  margin-top: 30px;
  font-size: 11px;
}

h1 {
  margin-bottom: 20px;
}

.section-wrapper {
  margin: 40px 0;
}

.section-horizontal {
  display: flex;
  align-items: center;
  margin: 0 -5px;
  flex-wrap: wrap;

  .section-wrapper {
    margin: 20px 10px 0;
  }
}

.form-title {
  color: #2C3E50;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  margin: 2px 0;
}

.touch-wrapper {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  textarea,
  input {
    width: 100%;
    max-width: 300px;
    height: 45px;
    border: 2px solid #2C3E50;
    padding: 5px 10px;
    border-radius: 5px; 

    &::placeholder {
      font-size: 12px;
    }

    &:focus {
      outline: none;
    }

    &.invalid {
      border-color: red;
    }
  }

  textarea {
    max-width: 100%;
    min-height: 100px;
  }

  input.hidden {
    display: none;
  }
}

.error-field {
    position: absolute;
    bottom: -22px;
    left: 7px;
    font-size: 11px;
    color: red;
    font-weight: 700;
    text-transform: uppercase;
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