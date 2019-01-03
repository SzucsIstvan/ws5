
import Vue from 'vue'
import Vuex from 'vuex'
import viewType from "./modules/viewType";
import news from "./modules/news";
import newscontent from "./modules/newscontent";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    viewType,
    news,
    newscontent
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
