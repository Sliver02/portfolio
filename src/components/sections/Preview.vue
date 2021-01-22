<template>
    <div class="preview" @mousedown="startDrag" @mousemove="drag" @mouseup="stopDrag">

        <div class="preview__text-wrapper">
            <div class="preview__quote-wrapper">
                Sucking at something is the first step to be sorta good at something.
            </div>

            <div class="preview__desc">
                <p>Adobe-suite. Photoshop. Illustrator. InDesign. 
                vector-art. digital-painting. animation. posters. logos. mockups. 
                <br>brand-identity. vue-js. lit-element. javascript. scss.</p>
            </div>
        </div>

        <div v-if="isMobile">
            <carousel></carousel>
        </div>

        <div class="preview__img-wrapper" v-else>
            <transition-group name="fadeIn">
                <img :ref="project.url" v-for="(project, index) in getProjectsPreview" :key="index"
                    :src="require('../../assets/img/projects/' + project.url +'/thumbnail.jpg')" alt=""  ondragstart="return false;" 
                    @mousedown="isActive">
            </transition-group>
        </div>
    </div>

</template>

<script>
import carousel from '../Carousel.vue';
import {mapState, mapGetters, mapMutations} from 'vuex';

export default {
    components: {
        carousel,
    },

    data() {
        return {
            activeItem: null,
            active: false,
            topZindex: 1,
            viewportWidth: null,
            viewportHeight: null,
            arr: [1,2,3,4,5,6],
        }
    },

    methods: {
        ...mapMutations([
            'switchSkill',
            'switchPreview',
        ]),
        isActive(e) {
            // assign temp target to empty object
            this.activeItem = e.target;
            this.active = true;
        },
        startDrag(e) {
            e = e || window.event;

            if(this.activeItem !== null) {
                e.preventDefault();

                // initialzie temp variables for activeItem Object
                if (!this.activeItem.xOffset) {
                    this.activeItem.xOffset = 0;
                }

                if (!this.activeItem.yOffset) {
                    this.activeItem.yOffset = 0;
                }

                if (!this.activeItem.currentZindex) {
                    this.activeItem.currentZindex = 0;
                }

                // increasing zIndex only when necessary
                if (this.activeItem.currentZindex < this.topZindex) {
                    this.activeItem.currentZindex = ++this.topZindex;
                    this.activeItem.style.zIndex = this.activeItem.currentZindex;
                }

                // reset intial coordinates of activeItem
                this.activeItem.initialX =  e.clientX - this.activeItem.xOffset;
                this.activeItem.initialY =  e.clientY - this.activeItem.yOffset;
            }
        },
        drag(e) {
            e = e || window.event;

            if (this.active) {
                e.preventDefault();

                // update coordinates with mouse position, adding temp current variables
                this.activeItem.currentX = e.clientX - this.activeItem.initialX;
                this.activeItem.currentY = e.clientY - this.activeItem.initialY;

                // update offsets in relation to current coordinates
                this.activeItem.xOffset = this.activeItem.currentX;
                this.activeItem.yOffset = this.activeItem.currentY;

                // updating the translation
                this.activeItem.style.transform = `translate(${this.activeItem.currentX}px,${this.activeItem.currentY}px)`;
            }
        },
        stopDrag(e) {
            e = e || window.event;

            if (this.activeItem !== null) {
                e.preventDefault();

                // reset initial coordinates with current position
                this.activeItem.initialX = this.activeItem.currentX;
                this.activeItem.initialY = this.activeItem.currentY;

                // reset active boolean and object
                this.active = false;
                this.activeItem = null;
            }
        },
    },

    computed: {
        ...mapState([
            'isMobile',
            'skills',
            'selectedSkill',
        ]),
        ...mapGetters([
            'getProjectsPreview',
        ]),
        viewport() {
            var e = window, a = 'inner';

            if ( !( 'innerWidth' in window ) ) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
        },
    },
    
    watch: {

    },
    
}
</script>

<style lang="scss">
    
</style>