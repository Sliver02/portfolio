<template>
    <div class="project">
        <div class="project__header">
            <div class="project__img"></div>
            <div class="project__desc">
                <h1>20 Coperti</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                    Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                    ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>

                <div class="btn" :class="{'btn--active': expand === true}" @click="expandPrev()">.see more</div>
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
            expand: false,
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