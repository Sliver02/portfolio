import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        pageIndex: 0,
        showProject: false,
        selectedSkill: null,
        skills: [
          {type:'graphic', name: 'Graphic Design', desc: ''},
          {type:'draw', name: 'Illustration', desc: ''},
          {type:'web', name: 'Web Design', desc: ''},
        ],
        projects: [
          {
            url: 'urdrugs', 
            name: 'Know your Drugs', 
            type: ['draw'],
            preview: true, 
            desc: 'Series of vector illustrations born to bring awarness and light on one of the most tabù topic of our society, illegal drugs. <br><br>Often we talk about these substances but most of the time we don’t even know how they look. <br><br>Thorugh weekly Instagram’s posts i tried to bring a visual rapresentation ligthen by a colorfull look, accompanied by a detailed descprition of the drug’s effects and consequences.',
          },
          {
            url: 'sketch', 
            name: 'Sketch Book', 
            type: ['draw'],
            preview: true, 
            desc: '',
          },
          {
            url: 'mopay', 
            name: 'MoPay', 
            type: ['graphic'],
            preview: true, 
            desc: 'E-wallet App brand identity. This app let you pay and manage your money accounts through your phone. <br><br>Technology, Reliability, security are the main features requested by the company. <br><br>The technology field in which this logo will leave also has its requirements, it has to be bold, modern and simple.',
          },
          {
            url: '20coperti', 
            name: 'Venti Coperti', 
            type: ['graphic'],
            preview: true, 
            desc: 'Corporate identity for Venetian restaurant with a modern spin on traditional dishes. <br><br>The name is a word play between “twenty”, that in Italian also mean “winds”, and “covers” that also means “tables settled”. <br><br>Conceptually it indicates an association between the protection from the ocean winds and the small size of the restaurant.'
          },
          {
            url: 'hrfestival', 
            name: 'Hard Rockolo', 
            type: ['graphic', 'web'],
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
      },
      switchSkill(state, type) {
        if (state.selectedSkill != type) {
          state.selectedSkill = type;
        } else {
          state.selectedSkill = null;
        }       
      }
    },
    getters: {
      getProjectsPreview: state => {
        var p = [];
        
        state.projects.forEach(function(project) {
          if (project.preview) {
            if (state.selectedSkill == null) {
              p.push(project);
            } else {
              
              //console.log('skill: ' + state.selectedSkill);
              for (var i=0; i < project.type.length; i++) {
                if (project.type[i] == state.selectedSkill) {
                  console.log('url: ' + project.url);
                  //console.log('type: ' + project.type[i]);
                  p.push(project);

                }
              }
            }
          }
        });
    
        return p;
      },
      //getProjectGroup: state => {
        
      //},
    },
});

// store.commit('increment');
// console.log(store.state.count);
//console.log(store.getters.getProjectsPreview);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
