<template>
    <div class="contact">
        <div class="contact__header">
            <h1>Get in touch</h1>
            <p>Let's get together to create something unique and charming</p>
        </div>

        <div class="contact__links">
            <a href="tel:+39-340-006-0384">(+39)3400060384</a>
            <a href="mailto:panzera.jacopo@gmail.com">panzera.jacopo@gmail.com</a>
        </div>

        <form @submit.prevent="handleSubmit" class="contact__form" name="contact" action="POST" data-netlify="true" data-netlify-honeypot="bot-field">

            <div style="diplay: none;" hidden>
                <label>Don't fill this if u're human:  <input name="bot-field"> </label>
            </div>

            <div class="contact__name">
                <label for="name">.name*</label>
                <input v-model="form.name" name="name" id="name" type="text" required>
            </div>

            <div class="contact__email">
                <label for="email">.e-mail*</label>
                <input v-model="form.email" name="email" id="email" type="email" required>
            </div>

            <div class="contact__phone">
                <label for="phone">.phone</label>
                <input v-model="form.phone" name="phone" id="phone" type="tel">
            </div>

            <div class="contact__subject">
                <label for="subject">.subject*</label>
                <input v-model="form.subject" name="subject" id="subject" type="text" required>
            </div>

            <div class="contact__message">
                <label for="message">.what can I do for you*</label>
                <textarea v-model="form.message" name="message" id="message" type="text" required></textarea>
            </div>

            <!-- <div class="captcha">
                <div data-netlify-recaptcha='true'></div>
            </div> -->

            <input class="btn" type="submit" value=".send">
            <!-- <div class="btn" :class="{'btn--active': expand === true}" @click="expandPrev()">.see more</div> -->
        </form>

        <div class="copyright">
            Copyright© 2020 - Jacopo Panzera <img :src="require('../../assets/img/icons/logo.svg')" alt="">
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },

    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            }
        }
    },

    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&')
        },
        handleSubmit() {
            fetch('/', {
                method: 'post',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: this.encode({
                    'form-name': 'contact',
                    ...this.form
                })
            })
            .then(() => {
                console.log('success: message sent');
                alert('success: message sent');
            })
            .catch(e => {
                console.error(e);
                alert('error: message not sent');
            })
        },
    },

    computed: {

    },
}
</script>

<style lang="scss">
    
</style>