// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import * as VueGoogleMaps from "vue2-google-maps";
require('typeface-montserrat');
require('typeface-open-sans')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAzf9wE8euXLL9aiSUEBSST1hvufVb_GvU",
      libraries: "places" // necessary for places input
    }
  });

  /* router.options.scrollBehavior = function(to, from , savedPosition) {
    return false;
  } */
}
