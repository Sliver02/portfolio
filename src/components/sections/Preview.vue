<template>
    <div class="preview">

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

        <div class="preview__img-wrapper" @mousedown="startDrag" @mousemove="drag" @mouseup="stopDrag" v-else>
            <transition-group name="fadeIn">
                <img :ref="project.url" v-for="(project, index) in getProjectsPreview" :key="index"
                    :src="require('../../assets/img/projects/' + project.url +'/thumbnail.jpg')" alt=""  ondragstart="return false;" 
                    @mousedown="draggable">
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
            activeItemZindex: 0,
            viewportWidth: null,
            viewportHeight: null,
        }
    },

    updated() {
        // this.imageScramble();
    },

    methods: {
        ...mapMutations([
            'switchSkill',
            'switchPreview',
        ]),

        imageScramble() {
            this.getProjectsPreview.forEach((preview) => {
                let img = this.$refs[preview.url][0];

                img.style.left = (Math.random()*80) + "vw";
                img.style.top = (Math.random()*60) + "vh";
            });
        },
        draggable(e) {
            this.activeItem = e.target;
            this.active = true;
            console.log(this.activeItem);
        },
        startDrag(e) {
            e = e || window.event;

            if(this.activeItem !== null) {
                e.preventDefault();

                if (!this.activeItem.xOffset) {
                    this.activeItem.xOffset = 0;
                }

                if (!this.activeItem.yOffset) {
                    this.activeItem.yOffset = 0;
                }

                this.activeItem.initialX =  e.clientX - this.activeItem.xOffset;
                this.activeItem.initialY =  e.clientY - this.activeItem.yOffset;

                this.activeItem.z = this.activeItemZindex || 1;
                this.activeItem.style.zIndex = ++this.activeItemZindex;
            }
        },

        drag(e) {
            e = e || window.event;

            if (this.active) {
                e.preventDefault();

                this.activeItem.currentX = e.clientX - this.activeItem.initialX;
                this.activeItem.currentY = e.clientY - this.activeItem.initialY;

                this.activeItem.xOffset = this.activeItem.currentX;
                this.activeItem.yOffset = this.activeItem.currentY;

                this.activeItem.style.transform = `translate(${this.activeItem.currentX}px,${this.activeItem.currentY}px)`;
            }
        },

        stopDrag(e) {
            e = e || window.event;

            if (this.activeItem !== null) {
                e.preventDefault();

                this.activeItem.initialX = this.activeItem.currentX;
                this.activeItem.initialY = this.activeItem.currentY;

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