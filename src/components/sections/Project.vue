<template>
    <div ref="container" class="project">
        <i class="btn btn__close material-icons"  @click="toggleProject">close</i>
        <i v-show="project.slides.length != 0" class="btn btn__top material-icons"  @click="returnTop">keyboard_arrow_up</i>

        <div class="project__header">
            <div class="project__img">
                <img :src="require('../../assets/img/projects/' + project.url +'/thumbnail.jpg')" alt="">
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

                <div v-show="project.slides.length != 0" class="btn" @click="showMore">.show_more</div>
            </div>
        </div>

        <div v-show="project.slides.length != 0" ref="content" class="project__content">
            <img v-for="(slide, index) in project.slides" :key="index" :src="require('../../assets/img/projects/' + project.url +'/slide/'+ slide +'.jpg')" alt="">
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
        showMore() {
            // this.expand = !this.expand;

            // var content = this.$refs.content;

            // setTimeout(function() {
            //     content.scrollIntoView();
            // }, 100);

            this.$refs.content.scrollIntoView();
        },
        returnTop() {
            this.$refs.container.scrollTop = 0;
        }
    },

    computed: {
        ...mapState([
            'showProject',
            'projects',
        ]),
        project() {
            return this.projects[this.selectedProject];
        },
    },
}
</script>

<style lang="scss"> 
    
</style>