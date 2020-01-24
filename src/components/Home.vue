<template>

    <div id="main" :style="scssVars">
        <div class="c-navbar">
            <div class="c-navbar__logo">
                <h1><a href=".">jac.pan</a></h1>
            </div>
            <div class="c-navbar__menu">
                <ul class="l-nav">
                    <!-- <li v-for="(page, index) in pages" :key="index">
                        <a :href="'#'+page" class="l-nav__btn" @click="active = page" :class="{'is-active': active === page }">.{{page}}</a>
                    </li> -->

                    <li v-for="(page, index) in pages" :key="index">
                        <div class="l-nav__btn" @click="pageIndex = index" :class="{'is-active': pageIndex === index }">.{{page}}</div>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- <div class="l-side" :style="{transform:' translate3d(calc(-100vw*' + pageIndex +'), 0, 0)'}"> -->
        <div class="l-side">
            <div class="l-section">

                <div class="c-home">
                    <div class="c-home__img"></div>
                    <div class="c-home__desc">
                        <h1>20 Coperti</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
                    </div>
                </div>

            </div>

            <div class="l-section">

                <div class="c-home">
                    <div class="c-home__img"></div>
                    <div class="c-home__desc">
                        <h1>20 Coperti</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
                    </div>
                </div>

            </div>

            <div class="l-section">

                <div class="c-home">
                    <div class="c-home__img"></div>
                    <div class="c-home__desc">
                        <h1>20 Coperti</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
                    </div>
                </div>

            </div>

            <div class="l-section">

                <div class="c-home">
                    <div class="c-home__img"></div>
                    <div class="c-home__desc">
                        <h1>20 Coperti</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
                    </div>
                </div>

            </div>
        </div>



    </div>

</template>

<script>
export default {
    data() {
        return {
            asd: 0,
            pageIndex: 0,
            pages: [ 'home', 'about', 'works', 'contact' ]
        }
    },

    methods: {
        
        

    },

    computed: {
        
        scssVars() {
            return {
                '--pages': this.pages.length,
                '--slideX': -100 * this.pageIndex + 'vw',
            }
        }

    },
}
</script>

<style lang="scss">
    
</style>