// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
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

  /* router.options.scrollBehavior = function(to, from , savedPosition) {
    return false;
  } */
}
