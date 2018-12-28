import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('../components/NewsIndex.vue').default},
    { path: '/news', component: require('../components/NewsIndex.vue').default},
    { path: '/news/:slug/show', component: require('../components/NewsContent.vue').default},
]

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            console.log("scrollBehavior", savedPosition)
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
});

export default router;
