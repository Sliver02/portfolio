export default {
    handleResize(state) {
      state.fullWidth = document.documentElement.clientWidth;

      if(state.fullWidth <= 899 && state.isMobile === false) {
        state.isMobile = true;
      }
      
      if(state.fullWidth >= 900 && state.isMobile === true) {
        state.isMobile = false;
      }
    },
    switchPage(state, index) {
      state.showMenu = false;
      state.showProject = false;
      state.pageIndex = index;
    },
    toggleMenu(state) {
      state.showProject = false;
      state.showMenu = !state.showMenu;
    },
    toggleProject(state) {
      state.showProject = !state.showProject;
    },
    switchProject(state, index) {
      state.showProject = true;
      state.selectedProject = index;
    },
    switchSkill(state, type) {
      
      /** it changes globally the selected skill in _Preview.vue
       * it then display only the works correletated
       */

      // select and deselct a skill
      if (state.selectedSkill != type) {
          state.selectedSkill = type;
      } else {
          state.selectedSkill = '';
      }

      // based on .show property the preview will be visible
      state.projects.forEach(project => {
        // if no skill is selected everything will be visible
        if (state.selectedSkill == '') {
            project.show = true;
        } else {
          // or, each type of the projects will be checked and compared to the selected skill
          // we use a for loop and not forEach beacause in this case we need to break it
          for (var i=0; i < project.type.length; i++) {
            if (project.type[i] == state.selectedSkill) {
                project.show = true;
                
                // we break the loop in the case a true value is encountered thorughtout the array
                // to avoid turning .show false when the project has the last type different from the one selected
                break;
            } else {
                project.show = false;
            }
          }
        }
      });
    },    
}