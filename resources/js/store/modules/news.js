export default {
    namespaced: true,
    state: {
        news: {}
    },
    getters: {
        news(state) {
            return state.news;
        },
        newsByUrl(state) {
            return (url) => {
                // return state.news.filter()
                if (typeof state.news[url] != "undefined") {
                    return state.news[url];
                } else {
                    return [];
                }

            };
        }

    },
    mutations: {
        setNews() {

        }
    },
    actions: {
        getData({state}, url) {

            return new Promise((resolve, reject) => {

                if (typeof state.news[url] != "undefined" &&
                    state.news[url].length > 0) {
                    resolve(state.news[url]);
                } else {
                    axios.get(url).then((response) => {
                        if (response.status == 200) {
                            state.news[url] = response.data;
                            resolve(state.news[url]);
                        } else {
                            reject(response);
                        }
                    });
                }

            });

        }
    }
}
