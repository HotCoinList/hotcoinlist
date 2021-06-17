import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const requireModule = require.context('./modules', true, /\.js$/i);
const modules = {};

requireModule.keys().forEach((fileName) => {
  const matched = fileName.match(/([A-Za-z0-9-_]+)\./i);
  if (matched && matched.length > 1) {
    const key = matched[1];
    const storeModule = requireModule(fileName).default;
    modules[key] = storeModule;
  }
});

export default new Vuex.Store({
  modules,
});
