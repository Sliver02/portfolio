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
                autoplay: true,
                navButtons: false,
                dots: false,
                speed: 1000,
            }
        }
    },

    methods: {
        ...mapMutations([
            'openProject',
            'switchProject',
        ]),
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