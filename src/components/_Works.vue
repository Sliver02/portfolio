<template>
    <div class="works">
        <h1>Works</h1>
        <div class="works__wrapper">

            <div class="works__project" v-for="(project, index) in projects" :key="index" @click="switchProject(index)">
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
        
        
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    components: {
    },

    data() {
        return {
            // selectedProject: 0,
        }
    },

    methods: {
        ...mapMutations([
            'openProject',
            'switchProject',
        ]),
        // projectPage(index) {
        //     this.switchProject(index);
        //     this.openProject();
        // },
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