<template>
    <div class="preview">

        <div class="preview__header">
            <div class="preview__img"></div>
            <div class="preview__desc">
                <h1>20 Coperti</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                    Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                    ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>

                <div class="btn" :class="{'btn--active': show === true}" @click="show = !show">.see more</div>
            </div>
        </div>

        <div class="preview__content" v-if='show == true'>
            <div class="preview__section">
                Z<div class="preview__img"></div>
                <div class="preview__desc">
                    <h1>20 Coperti</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                        Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                        ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>

                    <div class="btn">.see more</div>
                </div> 
            </div>
        </div>

    </div>
</template>

<script>
export default {
    components: {
        
    },

    data() {
        return {
            show: false,
        }
    },

    methods: {

    },

    computed: {

    },
    
}
</script>

<style lang="scss">
    
</style>