// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import VueGtag from "vue-gtag";

require('typeface-montserrat');
require('typeface-open-sans')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  extend('required', {
    ...required,
    message: 'Kötelezően kitöltendő *'
  });

  extend('email', {
    ...email,
    message: 'az email formátuma hibás'
  });

  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);

  Vue.use(VueGtag, {
    config: { id: "UA-100816935-1" }
  });

  head.meta.push({
    name: 'og:title',
    content: 'Mire számíthatok 2020-ban ha ittasan vezettem? - dr. Kakuk Zoltán Dániel, ügyvéd'
  });

  head.meta.push({
    name: 'og:description',
    content: 'Büntetőeljárás indult ittas vezetés miatt Önnel szemben? Ismerje meg a jogait és lehetőségeit, közérthető módon!'
  });

  head.meta.push({
    name: 'description',
    content: 'Az ittas vezetés miatt indult büntetőeljárás kimenetele számtalan körülménytől függhet 2020-ban. Ugyanez vonatkozik az ittas vezetés miatt kiszabható büntetésekre is. Ismerje meg ezeket!'
  });
  
  head.meta.push({
    name: 'og:image',
    content: '/ittasvezetessocial.jpg'
  });

  head.meta.push({
    name: 'og:url',
    content: 'https://ittasvezetes.drkakukzoltan.hu'
  });
  
  head.meta.push({
    charset: "utf-8"
  });

  /* router.options.scrollBehavior = function(to, from , savedPosition) {
    return false;
  } */
}
