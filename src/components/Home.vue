<template>

    <div id="main" :style="scssVars">
        <div class="navbar">
            <div class="navbar__wrap">
                <a class="navbar__logo" href=".">
                    <img :src="require('../assets/img/icons/logo.svg')" alt="">
                    <h1>jac.pan</h1>
                </a>

                <i class="navbar__burger material-icons" @click="toggleMenu()">menu</i>

                <div class="navbar__menu" :class="{'is-open': showMenu === true}">
                    <ul class="nav">
                        <!-- <li v-for="(page, index) in pages" :key="index">
                            <a :href="'#'+page" class="nav__btn" @click="active = page" :class="{'is-active': active === page }">.{{page}}</a>
                        </li> -->

                        <li v-for="(page, index) in pages" :key="index" class="nav__btn" :class="{'is-active': pageIndex === index }" @click="switchPage(index)">
                            <span>
                                .{{page}}
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        
        <div class="home">

            <carousel v-if="isMobile"></carousel>
            <div v-else class="home__section">

                <preview></preview>

            </div>


            <div id="works" class="home__section">

                <works></works>

            </div>
            
            <div class="home__section">

                <about></about>

            </div>

            <div class="home__section">

                <contact></contact>

            </div>
        </div>

        <transition name="fadeRigt">
            <projectPage v-if="showProject == true" :selectedProject="selectedProject" ></projectPage>
        </transition>

    </div>

</template>

<script>
import preview from './sections/Preview.vue';
import carousel from './sections/Carousel.vue';
import about from './sections/About.vue';
import works from './sections/Works.vue';
import contact from './sections/Contact.vue';
import projectPage from './sections/Project';
import {mapState, mapMutations} from 'vuex';
import Carousel from './sections/Carousel.vue'

export default {
    components: {
        preview,
        carousel,
        about,
        works,
        contact,
        projectPage,
        Carousel,
    },

    data() {
        return {
            pages: [ 'home', 'works', 'about', 'contact' ],
        }
    },

    mounted() {
        this.handleResize();
    },

    created() {
        window.addEventListener('resize', this.handleResize)
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },

    methods: {
        ...mapMutations([
            'handleResize',
            'switchPage',
            'toggleMenu',
        ]),
        blockScroll(newValue) {
            // console.log(newValue);
            if (newValue === true) {
                document.querySelector('html').style.overflowY = 'hidden';
            } else {
                document.querySelector('html').style.overflowY = 'auto';
            }
        }
    },

    computed: {
        ...mapState([
            'isMobile',
            'pageIndex',
            'showMenu',
            'showProject',
            'selectedProject',
        ]),
        scssVars() {
            return {
                '--pages': this.pages.length,
                '--slideX': (-100 * this.pageIndex + 'vw'),
                '--scrollbarWidth': (this.getScrollbarWidth + 'px'),
            }
        },
        getScrollbarWidth() {
             // Creating invisible container
            const outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.overflow = 'scroll'; // forcing scrollbar to appear
            outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
            document.body.appendChild(outer);

            // Creating inner element and placing it in the container
            const inner = document.createElement('div');
            outer.appendChild(inner);

            // Calculating difference between container's full width and the child width
            const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

            // Removing temporary elements from the DOM
            outer.parentNode.removeChild(outer);

            return scrollbarWidth;
        },
    },

    watch: {
        showProject: function(newValue) {
            this.blockScroll(newValue);
        },
        showMenu: function(newValue) {
            this.blockScroll(newValue);
        },

    }
}
</script>

<style lang="scss">
    
</style>