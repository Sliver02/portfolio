<template>
    <div class="project">
        <div class="project__header">
            <div class="project__img"></div>
            <div class="project__desc">
                <h1>.{{projects[selectedProject].name}}</h1>
                
                <p v-if="projects[selectedProject].desc == ''">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                    Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                    ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?
                </p>

                <p v-else>
                    {{projects[selectedProject].desc}}
                </p>

                <div class="btn" @click="closeProject">.close</div>
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
            'closeProject',
        ]),
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