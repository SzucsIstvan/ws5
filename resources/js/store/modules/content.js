/**
 * Time in seconds
 * @type {Number}
 */
const expirationTime = 60;

export class ContentManager {

    getCurrenTimestamp () {
        return new Date().getTime();
    }

    expTimeInMilis() {
        return this.expirationTime * 1000;
    }

    isDataExpired(timestamp) {
        return !((timestamp + this.expTimeInMilis()) >= this.getCurrenTimestamp());
    }

    constructor (expTime) {

        var _this = this;
        this.namespaced = true;

        if (typeof expTime != "undefined" && parseInt(expTime) >= 0) {
            this.expirationTime = expTime;
        } else {
            this.expirationTime = expirationTime;
        }

        this.state = {
            content: {},
            timestamps: {},
        };

        this.getters = {
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

        this.actions = {
            getData({state}, url) {

                return new Promise((resolve, reject) => {

                    if (typeof state.content[url] != "undefined" &&
                        typeof state.timestamps[url] != "undefined" &&
                        !_this.isDataExpired(state.timestamps[url])) {
                        resolve(state.content[url].data);
                    } else {
                        axios.get(url).then((response) => {
                            if (response.status == 200) {
                                state.content[url] = response.data;
                                state.timestamps[url] = new Date().getTime();
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

}
