// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import VueGtag from 'vue-gtag';

require('typeface-montserrat');
require('typeface-open-sans');

export default function(Vue, { router, head, isClient }) {
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
    config: { id: 'UA-100816935-1' }
  });

  head.link.push({
    key: 'canonical',
    rel: 'canonical',
    href: 'https://ittasvezetes.drkakukzoltan.hu'
  });

  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content:
      'Mire számíthatok 2024-ben ittas vezetés esetén? - dr. Kakuk Zoltán Dániel, ügyvéd'
  });

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content:
      'Büntetőeljárás indult ittas vezetés miatt Önnel szemben? Ismerje meg a jogait és lehetőségeit, közérthető módon!'
  });

  head.meta.push({
    key: 'og:type',
    name: 'og:type',
    content: 'website'
  });

  head.meta.push({
    key: 'description',
    name: 'description',
    content:
      'Az ittas vezetés miatt indult büntetőeljárás kimenetele számtalan körülménytől függ 2024-ben. Ugyanez vonatkozik az ittas vezetés miatt kiszabható büntetésekre is.'
  });

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: '/ittasvezetessocial.jpg'
  });

  head.meta.push({
    key: 'og:url',
    name: 'og:url',
    content: 'https://ittasvezetes.drkakukzoltan.hu'
  });

  head.meta.push({
    key: 'og:locale',
    name: 'og:locale',
    content: 'hu_HU'
  });

  head.meta.push({
    charset: 'utf-8'
  });

  /* router.options.scrollBehavior = function(to, from , savedPosition) {
    return false;
  } */
}
