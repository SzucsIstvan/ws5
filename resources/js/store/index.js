
import Vue from 'vue'
import Vuex from 'vuex'
import viewType from "./modules/viewType";
import { ContentManager } from "./modules/content";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    viewType,
    news: new ContentManager(60),
    newscontent: new ContentManager(5),
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
