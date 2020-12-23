<template lang="">
    <agile class="carousel" :options="myOptions">
        <div class="carousel__slide" v-for="(project, index) in getProjectsPreview" :key="index">
            <img class="carousel__img" :src="require('../assets/img/projects/' + project.url +'/thumbnail.jpg')" alt="" >
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
        console.log('hello');
        this.startSlide();
    },

    methods: {
        ...mapMutations([
            'openProject',
            'switchProject',
        ]),
        startSlide() {
            var randomSlide = Math.floor(Math.random() * this.getProjectsPreview.length)
            console.log(randomSlide);
            this.myOptions.initialSlide = randomSlide;
            console.log(this.myOptions.initialSlide);
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