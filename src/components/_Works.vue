<template>
    <div class="works">
        <!-- <div class="works__header">
            <div class="works__img"></div>
            <div class="works__desc">
                <h1>20 Coperti</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                    Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                    ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>

                <div class="btn" :class="{'btn--active': expand === true}" @click="expandPrev()">.see more</div>
            </div>
        </div> -->

        <div class="works__wrapper">
            <div class="works__project" v-for="(work, index) in works" :key="index">
                <div class="works__thumbnail-wrapper">
                    <div class="thumbnail">
                        <img :src="require('../assets/img/projects/thumb/' + work.thumb +'.jpg')" alt="">
                    </div>
                </div>
                <div class="works__title">
                    .{{work.name}}
                </div>
            </div>
        </div>

        <transition v-if="show == true">
            <project></project>
        </transition>

    </div>
</template>

<script>
import project from './_Project';

export default {
    components: {
        project,
    },

    data() {
        return {
            works: [
                {thumb: 'mopay', name: 'mo pay'},
                {thumb: '20coperti', name: '20 coperti'},
                {thumb: 'hardrockolo', name: 'hard rockolo'},
                {thumb: 'urdrugs', name: 'know your drugs'},
            ],
        }
    },

    methods: {

    },

    computed: {

    },
}
</script>

<style lang="scss">
    
</style>