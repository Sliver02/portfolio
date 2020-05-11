import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import projects from "./projects";

import mutations from "./mutations";
import getters from "./getters";

export const store = new Vuex.Store({
    state: {
        pageIndex: 0,
        showMenu: false,
        selectedProject: 0,
        showProject: false,
        selectedSkill: '',
        skills: [
          {type:'graphic', name: 'Graphic Design', desc: ''},
          {type:'draw', name: 'Illustration', desc: ''},
          {type:'web', name: 'Web Design', desc: ''},
        ],
        projects,
    },
    mutations,
    getters,
});