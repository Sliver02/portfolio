<template>
    <div id="app" :style="scssVars">
        
        <div class="navbar">
            <div class="navbar__wrap">
                <a class="navbar__logo" href=".">
                    <img :src="require('./assets/img/icons/logo.svg')" alt="">
                    <h1>jac.pan</h1>
                </a>

                <i class="navbar__burger material-icons" @click="toggleMenu()">menu</i>

                <div class="navbar__menu" :class="{'is-open': showMenu === true}">
                    <ul class="nav">
                        <li v-for="(page, index) in pages" 
                        :key="index" class="nav__btn" 
                        :class="{'is-active': pageIndex === index }" 
                        @click="pageScroll(page, index)">
                            <span>
                                .{{page}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="home">

            <div id="home" class="home__section">
                <preview></preview>
            </div>

            <div id="about" class="home__section">
                <about></about>
            </div>

            <div id="contact" class="home__section">
                <contact></contact>
            </div>

            <div id="works" class="home__section">
                <works></works>
            </div>
        </div>

        <transition name="fadeRigt">
            <projectPage v-if="showProject == true" :selectedProject="selectedProject" ></projectPage>
        </transition>

    </div>
</template>

<script>
import projectPage from './components/Project';
import preview from './components/sections/Preview.vue';
import about from './components/sections/About.vue';
import works from './components/sections/Works.vue';
import contact from './components/sections/Contact.vue';
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'app',
    components: {
        projectPage,
        preview,
        about,
        contact,
        works,
    },

    data() {
        return {
            pages: [ 'home', 'about', 'contact', 'works' ],
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
        },
        pageScroll(page, index) {
            if (!this.isMobile) {
                this.switchPage(index);
            } else {
                this.toggleMenu();
                document.getElementById(page).scrollIntoView();
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
    @import '/assets/scss/main';
</style>
