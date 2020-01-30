<template>
    <div class="contact">
        <div class="contact__header">
            <h1>Get in touch</h1>
            <p>Let's get together to create something unique and charming</p>
        </div>

        <form class="contact__form" action="">
            <div class="contact__name">
                <label for="name">.name</label>
                <input id="name" type="text">
            </div>

            <div class="contact__title">
                <label for="title">.title</label>
                <input id="role" type="text">
            </div>

            <div class="contact__email">
                <label for="email">.e-mail</label>
                <input id="email" type="text">
            </div>

            <div class="contact__phone">
                <label for="phone">.phone</label>
                <input id="phone" type="text">
            </div>

            <div class="contact__why">
                <label for="why">.what can I do for you</label>
                <textarea id="why" type="text"></textarea>
            </div>

            <input class="btn" :class="{'btn--active': expand === true}" type="submit" value=".send">
            <!-- <div class="btn" :class="{'btn--active': expand === true}" @click="expandPrev()">.see more</div> -->
        </form>
    </div>
</template>

<script>
export default {
    components: {
        
    },

    data() {
        return {
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