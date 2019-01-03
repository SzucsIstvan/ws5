const values = ["line", "brick", "magazine"];
const defIdx = 1;

function getViewTypeFromLocalStorage()
{
    let flag = false;

    if (localStorage.viewType) {
        for (var i=0; i<values.length; i++) {
            if (localStorage.viewType == values[i]) {
                flag = true;
            }
        }
    }

    if (!flag) {
        localStorage.viewType = values[defIdx];
    }

    return flag?localStorage.viewType:values[defIdx];
}

export default {
    namespaced: true,
    state: {
        type: getViewTypeFromLocalStorage()
    },
    getters: {
        getType(state) {
            return state.type;
        }
    },
    mutations: {
        setLine(state) {
            state.type = "line";
            localStorage.viewType = state.type;
        },
        setBrick(state) {
            state.type = "brick";
            localStorage.viewType = state.type;
        },
        setMagazine(state) {
            state.type = "magazine";
            localStorage.viewType = state.type;
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
