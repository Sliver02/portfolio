<template>
    <div class="project">
        <div class="project__header">
            <div class="project__img">
                <img :src="require('../assets/img/projects/' + project.url +'/thumbnail.jpg')" alt="">
            </div>
            <div class="project__desc">
                <h1>{{project.name}}</h1>
                
                <p v-if="project.desc == ''">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                    Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                    ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?
                </p>

                <p v-else v-html="project.desc">
                </p>

                <div class="btn" @click="toggleProject">.close</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    components: {
        
    },

    props: {
        selectedProject: {
            type: Number,
            required: true
        }
    },

    data() {

        return {
            expand: false,
        }
    },

    methods: {
        ...mapMutations([
            'toggleProject',
        ]),
    },

    computed: {
        ...mapState([
            'showProject',
            'projects',
        ]),
        project() {
            return this.projects[this.selectedProject];
        },
    }
}
</script>

<style lang="scss">
    
</style>