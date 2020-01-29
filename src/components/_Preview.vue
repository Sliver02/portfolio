<template>
    <div class="preview">

        <!-- <div class="preview__header">
            <div class="preview__img"></div>
            <div class="preview__desc">
                <h1>20 Coperti</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                    Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                    ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>

                <div class="btn" :class="{'btn--active': expand === true}" @click="expandPrev()">.see more</div>
            </div>
        </div> -->


        <div class="preview__text-wrapper">
            <div class="preview__link-wrapper">
                <a v-for="(skill, index) in skills" :key="index" href="#" class="preview__link" 
                :class="{'is-active': skillIndex === index }" @click="skillSelector(index)">
                    {{skill}}
                </a>
            </div>

            <div class="preview__desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
            </div>
        </div>

        <div class="preview__img-wrapper">
            <img class="img-drag" v-for="(skill, index) in skills" :key="index" 
            :id="index" :src="require('../assets/img/homepage/' + skill +'.jpg')" alt="" 
             @mousedown="startDrag(index)" @mousemove="doDrag" @mouseup="stopDrag">
        </div>


    </div>
</template>

<script>
export default {
    components: {
        
    },

    data() {
        return {
            skillIndex: null,
            skills: [ 'Graphic Design', 'Illustration Artist', 'Web Designer' ],
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

    mounted() {

        // this.dragElement(document.getElementsByClassName('img-drag'));
        window.addEventListener('mouseup', this.stopDrag);
    },

    methods: {
        skillSelector($skill) {

            if (this.skillIndex != $skill) {
                this.skillIndex = $skill;
            } else {
                this.skillIndex = null;
            }

            return this.skillIndex;
        },

        // startDrag(index,e) {
        //     this.dragging = true;

        //     e = e || window.event;
        //     e.preventDefault();

        //     this.imgDragged = document.getElementById(index);


        //     this.element.pos3 = e.clientX;
        //     this.element.pos4 = e.clientY;
            
        //     this.x =  e.clientX;
        //     this.y = e.clientY;
        // },
        
        // doDrag(e) {
        //     if (this.dragging) {
        //         e = e || window.event;
        //         e.preventDefault();

        //         this.x = e.clientX;
        //         this.y = e.clientY;
                
        //         this.element.pos1 = this.element.pos3 - e.clientX;
        //         this.element.pos2 = this.element.pos4 - e.clientY;
        //         this.element.pos3 = e.clientX;
        //         this.element.pos4 = e.clientY;
                
        //         // console.log(elmnt.style)

        //         this.imgDragged.style.left = (this.imgDragged.offsetLeft - this.element.pos1) + "px";
        //         this.imgDragged.style.top = (this.imgDragged.offsetTop - this.element.pos2) + "px";

        //         console.log(this.imgDragged.style.left);
        //     }
        // },

        // stopDrag() {
        //     this.imgDragged = null;
        //     this.dragging = false;
        // },

        startDrag(index, ev) {
            ev = ev || window.event;
            ev.preventDefault();

            // var target = ev.target || ev.srcElement;

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

                // this.imgDragged.style.left = Math.min(Math.max(xCurrent, Math.min(this.viewportWidth - xCurrent, -50)), this.viewportWidth - this.imgDragged.offsetWidth) + 'px';
                // this.imgDragged.style.top = Math.min(Math.max(yCurrent, Math.min(this.viewportHeight - yCurrent, -50)), this.viewportHeight - this.imgDragged.offsetHeight) + 'px';

                // this.imgDragged.style.left = Math.min(xCurrent, this.viewportWidth - this.imgDragged.offsetWidth) + 'px';
                // this.imgDragged.style.top = Math.min(yCurrent, this.viewportHeight - this.imgDragged.offsetHeight) + 'px';

                this.imgDragged.style.left = xCurrent + "px";
                this.imgDragged.style.top = yCurrent + "px";

                console.log(this.imgDragged.style.left);
                console.log(this.imgDragged.style.top);
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

        viewport() {
            var e = window, a = 'inner';

            if ( !( 'innerWidth' in window ) ) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
        } 

    },

    computed: {
        
    },

    watch: {

    },
    
}
</script>

<style lang="scss">
    
</style>