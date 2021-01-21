<template lang="">
    <agile class="carousel" :options="myOptions">
        <div class="carousel__slide" v-for="(project, index) in getProjectsPreview" :key="index">
            <img class="carousel__img" :src="require('../assets/img/projects/' + project.url +'/header.jpg')" alt="" >
            <div class="carousel__desc" @click="switchProject(index)">
                {{project.url}}.
            </div>
        </div>
    </agile>
</template>
<script>
import { VueAgile } from 'vue-agile'
import {mapState, mapGetters, mapMutations} from 'vuex';

export default {
    components: {
        agile: VueAgile 
    },

    data() {
        return {
            myOptions: {
                navButtons: false,
                dots: false,
                speed: 80000000000,
                timing: 'ease-in-out',
                initialSlide: 0,
            }
        }
    },

    beforeMount() {
        this.startSlide();
    },

    methods: {
        ...mapMutations([
            'openProject',
            'switchProject',
        ]),
        startSlide() {
            var randomSlide = Math.floor(Math.random() * this.getProjectsPreview.length)
            this.myOptions.initialSlide = randomSlide;
        }
    },

    computed: {
        ...mapState([
            'skills',
            'selectedSkill',
        ]),
        ...mapGetters([
            'getProjectsPreview',
            'showProject',
            'projects',
        ]),
    },
}
</script>
<style lang="">
    
</style>