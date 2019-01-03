
import Vue from 'vue'
import Vuex from 'vuex'
import viewType from "./modules/viewType";
import { ContentManager } from "./modules/content";
import login from "./modules/login";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    viewType,
    news: new ContentManager(3600),
    newscontent: new ContentManager(3600),
    login,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
