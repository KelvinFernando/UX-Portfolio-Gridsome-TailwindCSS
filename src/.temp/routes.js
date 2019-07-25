export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/kelvinfernando/Desktop/my-portfolio/src/pages/About.vue")
  },
  {
    path: "/companion-screen-sharing-app",
    component: () => import(/* webpackChunkName: "page--src--pages--companion-screen-sharing-app-vue" */ "/Users/kelvinfernando/Desktop/my-portfolio/src/pages/CompanionScreenSharingApp.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/kelvinfernando/Desktop/my-portfolio/src/pages/Index.vue")
  },
  {
    path: "/kodoo-usability-testing",
    component: () => import(/* webpackChunkName: "page--src--pages--kodoo-usability-testing-vue" */ "/Users/kelvinfernando/Desktop/my-portfolio/src/pages/KodooUsabilityTesting.vue")
  },
  {
    path: "/portfolio-design-process-and-development",
    component: () => import(/* webpackChunkName: "page--src--pages--portfolio-design-process-and-development-vue" */ "/Users/kelvinfernando/Desktop/my-portfolio/src/pages/PortfolioDesignProcessAndDevelopment.vue")
  },
  {
    path: "/toyo-branding-and-website",
    component: () => import(/* webpackChunkName: "page--src--pages--toyo-branding-and-website-vue" */ "/Users/kelvinfernando/Desktop/my-portfolio/src/pages/ToyoBrandingAndWebsite.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/kelvinfernando/Desktop/my-portfolio/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/kelvinfernando/Desktop/my-portfolio/node_modules/gridsome/app/pages/404.vue")
  }
]

