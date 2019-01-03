
import Vue from 'vue'
import Vuex from 'vuex'
import viewType from "./modules/viewType";
import { ContentManager } from "./modules/content";

// const news = new ContentManager();
// const newscontent = new ContentManager();

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    viewType,
    news: new ContentManager(60),
    newscontent: new ContentManager(0),
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
