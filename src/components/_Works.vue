<template>
    <div class="works">
        <div class="works__wrapper">

            <div class="works__project" v-for="(project, index) in projects" :key="index" @click="projectPage(index)">
                <div class="works__img-wrapper" >
                    <div class="works__img">
                        <img :src="require('../assets/img/projects/' + project.url +'/thumbnail.jpg')" alt="">
                    </div>
                </div>
                <div class="works__title">
                    .{{project.url}}
                </div>

            </div>

        </div>
        
        <transition name="fadeRigt">
            <projectPage v-if="showProject == true" :selectedProject="selectedProject" ></projectPage>
        </transition>
    </div>
</template>

<script>
import projectPage from './_Project';
import {mapState, mapMutations} from 'vuex';

export default {
    components: {
        projectPage,
    },

    data() {
        return {
            selectedProject: 0,
        }
    },

    methods: {
        ...mapMutations([
            'openProject',
        ]),
        projectPage(index) {
            console.log(index);
            console.log(this.selectedProject);

            this.selectedProject = index;
            this.openProject();
        },
    },

    computed: {
        ...mapState([
            'showProject',
            'projects',
        ]),
    }
}
</script>

<style lang="scss">
    
</style>