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
            <div class="home__section">

                <preview></preview>

            </div>

            <div class="home__section">

                <about></about>

            </div>

            <div id="works" class="home__section">

                <works @show='show' ></works>

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
import preview from './_Preview.vue'
import about from './_About.vue'
import works from './_Works.vue'
import contact from './_Contact.vue'
import projectPage from './_Project';
import {mapState, mapMutations} from 'vuex';

export default {
    components: {
        preview,
        about,
        works,
        contact,
        projectPage,
    },

    data() {
        return {
            show: false,
            pages: [ 'home', 'about', 'works', 'contact' ],
        }
    },

    mounted() {
        
    },

    methods: {
        ...mapMutations([
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