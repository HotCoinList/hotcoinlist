/* eslint-disable no-param-reassign */
const localeMap = {
  'zh-CN': '中文',
  en: 'English',
};

export default {
  namespaced: true,
  state: {
    locale: window.navigator.language,
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
    },
  },
  getters: {
    currentLocale: (state) => {
      return localeMap[state.locale];
    },
  },
};
