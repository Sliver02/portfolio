<template>

    <div id="main" :style="scssVars">
        <div class="navbar">
            <a class="navbar__logo" href=".">
                <img :src="require('../assets/img/icons/logo.svg')" alt="">
                <h1>jac.pan</h1>
            </a>
            <div class="navbar__menu">
                <ul class="nav">
                    <!-- <li v-for="(page, index) in pages" :key="index">
                        <a :href="'#'+page" class="nav__btn" @click="active = page" :class="{'is-active': active === page }">.{{page}}</a>
                    </li> -->

                    <li v-for="(page, index) in pages" :key="index">
                        <div class="nav__btn" :class="{'is-active': pageIndex === index }" @click="pageIndex = index">.{{page}}</div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="home">
            <div class="home__section">

                <preview></preview>

            </div>

            <div class="home__section">

                <about></about>

            </div>

            <div class="home__section">

                <works @show='show' ></works>

            </div>

            <div class="home__section">

                <contact></contact>

            </div>
        </div>



    </div>

</template>

<script>
import preview from './_Preview.vue'
import about from './_About.vue'
import works from './_Works.vue'
import contact from './_Contact.vue'


export default {
    components: {
        preview,
        about,
        works,
        contact,
    },

    data() {
        return {
            show: false,
            pageIndex: 0,
            pages: [ 'home', 'about', 'works', 'contact' ],
        }
    },


    methods: {
        
    },

    computed: {
        scssVars() {
            return {
                '--pages': this.pages.length,
                '--slideX': (-100 * this.pageIndex + 'vw'),
                '--scrollbarWidth': (this.getScrollbarWidth + 'px'),
            }
        },
    },

    watch: {
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
    }
}
</script>

<style lang="scss">
    
</style>