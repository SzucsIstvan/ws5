import VueRouter from 'vue-router';

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
        path: '/news/:slug/show',
        component: require('../components/NewsContent.vue').default,
        meta: { store: "newscontent/getData"}
    },
]

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
    // scrollBehavior (to, from, savedPosition) {
    //     // return new Promise((resolve, reject) => {
    //     //     setTimeout(() => {
    //     //         if (savedPosition) {
    //     //             resolve(savedPosition);
    //     //         } else {
    //     //             resolve({ x: 0, y: 0 })
    //     //         }
    //     //     }, 500);
    //     // })
    // }
});

export default router;
