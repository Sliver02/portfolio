<template>
    <div class="preview">

        <!-- <div class="preview__text-wrapper"> -->
            <div class="preview__link-wrapper">
                <a v-for="(skill, index) in skills" :key="index" href="#" class="preview__link" 
                :class="{'is-active': selectedSkill === skill.type }" @click="switchSkill(skill.type)">
                    {{skill.name}}
                </a>
            </div>

            <div class="preview__desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
            </div>
        <!-- </div> -->

        <div class="preview__img-wrapper" >
            <img class="img-drag" v-for="(image, index) in getProjectsPreview" :key="index" 
            :id="image.url" :src="require('../assets/img/projects/' + image.url +'/thumbnail.jpg')" alt="" 
            @mousedown="startDrag(image.url)" @mousemove="doDrag" @mouseup="stopDrag">
        </div>


    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';

export default {
    components: {
        
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
            asdasd: null,
        }
    },

    mounted() {

        // this.dragElement(document.getElementsByClassName('img-drag'));
        // window.addEventListener('mouseup', this.stopDrag);

            // console.log(this.images);


        for(var i=0; i < this.getProjectsPreview.length; i++) {
            var img = document.getElementById(this.getProjectsPreview[i].url);

            img.style.left = (Math.random()*40) + 10 + "vw";
            img.style.top = (Math.random()*50) + "vh";

            // console.log(i + ' ' + this.images[i]);
        }
    },

    methods: {
        ...mapMutations([
            'switchSkill',
        ]),
        
        viewport() {
            var e = window, a = 'inner';

            if ( !( 'innerWidth' in window ) ) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
        },

        /*skillSelector($skill) {

            if (this.skillIndex != $skill) {
                this.skillIndex = $skill;
            } else {
                this.skillIndex = null;
            }

            return this.skillIndex;
        },*/

        startDrag(index, ev) {
            ev = ev || window.event;
            ev.preventDefault();

            this.element.z = this.element.z || 1;

            this.imgDragged = document.getElementById(index);
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
            'skills',
            'selectedSkill',
        ]),
        ...mapGetters([
            'getProjectsPreview',
        ]),
        filterPreviewType() {
            var projects = [];

    
            if(this.selectedSkill == null) {

                projects = this.getProjectsPreview;

            } else {
                this.getProjectsPreview.forEach(function(project) {
                    console.log(this.selectedSkill)

                    projects.push(project);

                    /*for (let i=0; i < project.type.length; i++) {
                        
                        if (project.type[i] == this.selectedSkill) {

                            console.log(project.name + ' ' + project.type[i])
                            projects.push(project);
                        }
                    }*/
                });
            }


            return projects;
        },
    },
    
    watch: {

    },
    
}
</script>

<style lang="scss">
    
</style>