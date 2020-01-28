<template>
    <div class="preview">

        <!-- <div class="preview__header">
            <div class="preview__img"></div>
            <div class="preview__desc">
                <h1>20 Coperti</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                    Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                    ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>

                <div class="btn" :class="{'btn--active': expand === true}" @click="expandPrev()">.see more</div>
            </div>
        </div> -->
        <div class="preview__text-wrapper">

            <div class="preview__link-wrapper">
                <a v-for="(skill, index) in skills" :key="index" href="#" class="preview__link" 
                :class="{'is-active': skillIndex === index }" @click="skillSelector(index)">
                    {{skill}}
                </a>
            </div>

            <div class="preview__desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur explicabo illo alias repellat quam quas accusantium mollitia sed molestias! 
                Aliquid itaque aspernatur dolore totam molestias cumque! Esse culpa dolores quidem, 
                ex quod, incidunt labore quibusdam recusandae, iste ipsum dolorum. Velit?</p>
            </div>
        </div>

        <div class="preview__img-wrapper">
            <img v-for="(skill, index) in skills" :key="index" src="../assets/img/projects/1.jpg" alt="">
        </div>


    </div>
</template>

<script>
export default {
    components: {
        
    },

    data() {
        return {
            skillIndex: null,
            skills: [ 'Graphic Design', 'Illustration Artist', 'Web Designer' ],
        }
    },

    methods: {
        skillSelector($skill) {

            if (this.skillIndex != $skill) {
                this.skillIndex = $skill;
            } else {
                this.skillIndex = null;
            }

            return this.skillIndex;

        }
    },

    computed: {
        
    },
    
}
</script>

<style lang="scss">
    
</style>