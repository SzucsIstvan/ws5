import store from "../store";

export default {
    beforeRouteEnter (to, from, next) {
        store.dispatch(to.meta.store, to.path).then(data => next());
    }
}
