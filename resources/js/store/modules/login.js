export default {
    namespaced: true,

    state: {
        loggedIn: false,
        email: "defalt@valami.hu",
        passwd: null,
        errors: "",
        message: "",
        login: {}
    },

    getters: {

        isLoggedIn(state) {
            return state.loggedIn;
        },

        email (state) {
            console.log("email getter", state, state.email);
            return state.email;
        },

        password (state) {
            return state.passwd;
        }

    },

    mutations: {
        email (state, payload) {
            state.email = payload;
        },
        password (state, payload) {
            state.passwd = payload;
        },
        errors (state, payload) {
            state.errors = payload;
        },
        message (state, value) {
            state.message = value;
        },
        loggedIn (state, value) {
            state.loggedIn = value;
        }
    },

    actions: {

        postLogin ({ state, commit }, event, comp) {

            axios.post('/login', {
                email: state.email,
                password: state.passwd
            }).then(response => {

                if (response.status == 200) {
                    console.log("sikeres belepes", response);
                    commit("loggedIn", true);
                }

            }).catch((err, data) => {
                console.log("ez van", err, err.response);
                console.log("ez a válasz: ", err.response)
                commit("errors", err.response.data.errors);
                commit("message", err.response.data.message);
            });
        },

        reset(context) {

            if (context.state.loggedIn == false) {
                context.commit("email", "");
            }

            context.commit("password", "");
            context.commit("errors", "");
            context.commit("message", "");

        }
    }

}
