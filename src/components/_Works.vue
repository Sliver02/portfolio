<template>
    <div class="works">
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
        props: ['show'],

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