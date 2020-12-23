<template>
    <div class="preview">

        <div class="preview__text-wrapper">
            <div class="preview__quote-wrapper">
                <!-- <a v-for="(skill, index) in skills" :key="index" href="#" class="preview__link" 
                :class="{'is-active': selectedSkill === skill.type }" @click="switchSkill(skill.type)">
                    {{skill.name}}
                </a> -->
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
                <img class="img-drag" :ref="project.url" v-for="(project, index) in getProjectsPreview" :key="index"
                    :src="require('../../assets/img/projects/' + project.url +'/thumbnail.jpg')" alt="" 
                @mousedown="startDrag(project.url)" @mousemove="doDrag" @mouseup="stopDrag">
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
            //skillIndex: null,
            imgDragged: null,
            dragging: false,
            element: {
                x: 0,
                y: 0,
                z: 0,
                xOff: 0,
                yOff: 0,
            },
            viewportWidth: null,
            viewportHeight: null,
        }
    },

    updated() {
        this.imageScramble();
    },

    methods: {
        ...mapMutations([
            'switchSkill',
            'switchPreview',
        ]),

        imageScramble() {
            this.getProjectsPreview.forEach((preview) => {
                var img = this.$refs[preview.url][0];

                img.style.left = (Math.random()*80) + "vw";
                img.style.top = (Math.random()*60) + "vh";
            });
        },
        startDrag(url, ev) {
            ev = ev || window.event;
            ev.preventDefault();

            this.element.z = this.element.z || 1;

            this.imgDragged = this.$refs[url][0];
            this.dragging = true;

            this.element.x = ev.clientX;
            this.element.y = ev.clientY;
            this.element.xOff = this.imgDragged.offsetLeft;
            this.element.yOff = this.imgDragged.offsetTop;

            this.imgDragged.style.zIndex = ++this.element.z;
            
            this.viewportWidth = this.viewport().width;
            this.viewportHeight = this.viewport().height;
        },

        doDrag(ev) {
            ev = ev || window.event;
            
            if (this.dragging) {
                var xCurrent = parseFloat(ev.clientX) - this.element.x + this.element.xOff;
                var yCurrent = parseFloat(ev.clientY) - this.element.y + this.element.yOff;

                // limited borders
                // this.imgDragged.style.left = Math.min(Math.max(xCurrent, Math.min(this.viewportWidth - xCurrent, -50)), this.viewportWidth - this.imgDragged.offsetWidth) + 'px';
                // this.imgDragged.style.top = Math.min(Math.max(yCurrent, Math.min(this.viewportHeight - yCurrent, -50)), this.viewportHeight - this.imgDragged.offsetHeight) + 'px';

                // no borders
                this.imgDragged.style.left = xCurrent + "px";
                this.imgDragged.style.top = yCurrent + "px";

                // console.log(this.imgDragged.style.left);
                // console.log(this.imgDragged.style.top);
            }
        },

        stopDrag(ev) {
            ev = ev || window.event;
            this.dragging && (this.dragging = false);

            this.imgDragged = null;

            if (ev.preventDefault) {
                ev.preventDefault();
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
        // mobileBackground() {
        //     const selected = this.selectedSkill;
        //     const backArray = [];

        //     // console.log(this.getProjectsPreview[0].url)

        //     if (selected == ''){

        //         return this.getProjectsPreview[3].url;

        //     } else {
        //         this.getProjectsPreview.forEach((project, index) => {
        //             for (var i=0; i < project.type.length; i++) {
        //                 if (project.type[i] == selected) {
        //                     // console.log(this.getProjectsPreview[index]);

        //                     backArray.push(this.getProjectsPreview[index].url);
        //                     // console.log(backArray);

        //                     break;
        //                 }
        //             }
        //         });

        //         return backArray[Math.floor(Math.random() * backArray.length)];
        //     }
        // }
    },
    
    watch: {

    },
    
}
</script>

<style lang="scss">
    
</style>