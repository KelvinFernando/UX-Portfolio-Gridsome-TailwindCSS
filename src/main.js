// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import Project from '~/layouts/Project.vue';
import VueScrollTo from 'vue-scrollto';

require('typeface-roboto-slab');
require('typeface-montserrat');

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Project', Project);

  head.htmlAttrs = { lang: 'en' };

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease',
    offset: -117
  });

  head.meta.push({
    name: 'keywords',
    content: 'UX portfolio,Kelvin Fernando'
  });

  head.meta.push({
    name: 'description',
    content: 'Kelvin Fernando UX portfolio'
  });

  head.meta.push({
    name: 'author',
    content: 'Kelvin Fernando'
  });
  // Add an external Javascript before the closing </body> tag
}
