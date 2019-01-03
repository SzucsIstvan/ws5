
import Vue from 'vue'
import Vuex from 'vuex'
import viewType from "./modules/viewType";
import news from "./modules/content";
import newscontent from "./modules/content";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    viewType,
    news,
    newscontent,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
