import Vue from 'vue';
import App from './App.vue';
import {store} from './store/store';

Vue.config.productionTip = false;


// store.commit('increment');
// console.log(store.state.count);
//console.log(store.getters.getProjectsPreview);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
