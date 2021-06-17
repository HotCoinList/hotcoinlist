import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element';
import i18n from './plugins/i18n';

// styles
import './styles/colors.less';
import './styles/fontface.less';
import './styles/layout.less';
import './styles/animation.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
