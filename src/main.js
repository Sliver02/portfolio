import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        pageIndex: 0,
        showProject: false,
        skills: [
          {name: 'Graphic Design', desc: ''},
          {name: 'Illustration', desc: ''},
          {name: 'Web Design', desc: ''},
        ],
        projects: [
          {
            url: 'mopay', 
            name: 'mo pay', 
            preview: true, 
            desc: '',
          },
          {
            url: '20coperti', 
            name: 'venti coperti', 
            preview: false, 
            desc: 'Corporate identity for Venetian restaurant with a modern spin on traditional dishes. The name is a word play between “twenty”, that in Italian also mean “winds”, and “covers” that also means “tables settled”. Conceptually it indicates an association between the protection from the ocean winds and the small size of the restaurant.'
          },
          {
            url: 'hrfestival', 
            name: 'hard rockolo', 
            preview: true, 
            desc: '',
          },
          {
            url: 'urdrugs', 
            name: 'know your drugs', 
            preview: true, 
            desc: '',
          },
        ],
    },
    mutations: {
        // increment (state) {
        //     state.count++;
        // }
      openProject(state) {
        state.showProject = true;
      },
      closeProject(state) {
        state.showProject = false;
      },
      switchPage(state, index) {
        state.showProject = false;
        state.pageIndex = index;
      }
    },
    getters: {
      getProjectsPreview: state => {
        return state.projects.filter(project => project.preview);
      },
    },
});

// store.commit('increment');
// console.log(store.state.count);
console.log(store.getters.getProjectsPreview);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
