export default {
    namespaced: true,
    state: {
        type: "line"
    },
    getters: {
        getType(state) {
            return state.type;
        }
    },
    mutations: {
        setLine(state) {
            state.type = "line";
        },
        setBrick(state) {
            state.type = "brick";
        },
        setMagazine(state) {
            state.type = "magazine";
        },
    },
    actions: {
        changeView({ commit }, viewType) {
            if (viewType == "line") {
                commit("setLine");
            }
            if (viewType == "brick") {
                commit("setBrick");
            }
            if (viewType == "magazine") {
                commit("setMagazine");
            }

        },
    }
}
