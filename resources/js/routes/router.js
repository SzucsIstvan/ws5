import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: require('../components/NewsIndex.vue').default,
        meta: { store: "news/getData" },
    },
    {
        path: '/news',
        component: require('../components/NewsIndex.vue').default,
        meta: { store: "news/getData" },
    },
    {
        path: '/home',
        component: require('../components/NewsIndex.vue').default,
        meta: { store: "news/getData" },
    },
    {
        path: '/news/:slug/show',
        component: require('../components/NewsContent.vue').default,
        meta: { store: "newscontent/getData"}
    },

    {
        path: '/login',
        component: require('../components/Login.vue').default,
        props: {"loginUrl": "/login"}
    },

]

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
    scrollBehavior (to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition);
                } else {
                    resolve({ x: 0, y: 0 })
                }
            }, 500);
        })
    }
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
      // Start the route progress bar.

      NProgress.start()
  }

  if (to.matched.length > 0) {
    $("#not-vue").remove();
  }


  next()
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
});


export default router;
