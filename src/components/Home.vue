<template>

    <div id="main" :style="scssVars">
        <div class="navbar">
            <div class="navbar__logo">
                <h1><a href=".">jac.pan</a></h1>
            </div>
            <div class="navbar__menu">
                <ul class="nav">
                    <!-- <li v-for="(page, index) in pages" :key="index">
                        <a :href="'#'+page" class="nav__btn" @click="active = page" :class="{'is-active': active === page }">.{{page}}</a>
                    </li> -->

                    <li v-for="(page, index) in pages" :key="index">
                        <div class="nav__btn" @click="pageIndex = index" :class="{'is-active': pageIndex === index }">.{{page}}</div>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- <div class="l-side" :style="{transform:' translate3d(calc(-100vw*' + pageIndex +'), 0, 0)'}"> -->
        <div class="home">
            <div class="home__section">

                <div class="preview">
                    <div class="preview__img"></div>
                    <div class="preview__desc">
                        <h1>20 Coperti</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
                    </div>
                </div>

            </div>

            <div class="home__section">

                <div class="about">
                    <div class="about__desc">
                        <h1>jacopo<br> .panzera</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptate beatae? Magni amet, excepturi quasi consequuntur nulla quam placeat saepe. Ut eos illum repellat ea sit. Alias pariatur quibusdam eveniet officiis soluta numquam, nihil accusamus, dolore necessitatibus quis provident perspiciatis.</p>
                    </div>
                    <div class="about__img"></div>
                </div>

                <!-- <div class="preview">
                    <div class="preview__img"></div>
                    <div class="preview__desc">
                        <h1>20 Coperti</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
                    </div>
                </div> -->

            </div>

            <div class="home__section">

                <div class="preview">
                    <div class="preview__img"></div>
                    <div class="preview__desc">
                        <h1>20 Coperti</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
                    </div>
                </div>

            </div>

            <div class="home__section">

                <div class="preview">
                    <div class="preview__img"></div>
                    <div class="preview__desc">
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