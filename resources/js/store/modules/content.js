export default {
    namespaced: true,
    state: {
        content: {}
    },
    getters: {
        contentByUrl(state) {
            return (url) => {
                if (typeof state.content[url] != "undefined") {
                    return state.content[url];
                } else {
                    return {};
                }

            };
        }

    },

    actions: {
        getData({state}, url) {

            return new Promise((resolve, reject) => {

                if (typeof state.content[url] != "undefined") {
                    resolve(state.content[url]);
                } else {
                    axios.get(url).then((response) => {
                        if (response.status == 200) {
                            state.content[url] = response.data;
                            resolve(state.content[url]);
                        } else {
                            reject(response);
                        }
                    });
                }

            });

        }
    }
}
