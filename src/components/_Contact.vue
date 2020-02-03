<template>
    <div class="contact">
        <div class="contact__header">
            <h1>Get in touch</h1>
            <p>Let's get together to create something unique and charming</p>
        </div>

        <form class="contact__form" name="contact" action="POST" data-netlify="true">
            <div class="contact__name">
                <label for="name">.name</label>
                <input name="name" id="name" type="text">
            </div>

            <div class="contact__title">
                <label for="title">.title</label>
                <input name="role" id="role" type="text">
            </div>

            <div class="contact__email">
                <label for="email">.e-mail</label>
                <input name="email" id="email" type="text">
            </div>

            <div class="contact__phone">
                <label for="phone">.phone</label>
                <input name="phone" id="phone" type="text">
            </div>

            <div class="contact__why">
                <label for="why">.what can I do for you</label>
                <textarea name="why" id="why" type="text"></textarea>
            </div>

            <div class="captcha">
                <div data-netlify-recaptcha='true'></div>
            </div>

            <input class="btn" type="submit" value=".send">
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