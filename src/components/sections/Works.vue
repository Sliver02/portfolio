<template>
    <div class="works">
        <div class="works__filters-wrapper">
            <span v-for="(skill, index) in skills" :key="index" class="works__filter" 
            :class="{'is-active': selectedSkill === skill.type }" @click="switchSkill(skill.type)">
                {{skill.name}}
            </span>
        </div>

        <transition-group name="fadeIn" class="works__projects-wrap">
            <div class="works__project" 
                v-for="(project, index) in projects" :key="index" 
                @click="switchProject(index)" 
                v-show="project.show"
            >
                <div class="works__img-wrapper" >
                    <div class="works__img">
                        <img :src="require('../../assets/img/projects/' + project.url +'/thumbnail.jpg')" alt="" height="300">
                    </div>
                </div>
                <div class="works__title">
                    .{{project.url}}
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex';

export default {
    components: {
    },

    data() {
        return {
        }
    },

    methods: {
        ...mapMutations([
            'switchSkill',
            'openProject',
            'switchProject',
        ]),
    },

    computed: {
        ...mapState([
            'skills',
            'selectedSkill',
            'projects',
            'showProject',
        ]),
        ...mapGetters([
            'getProjectsPreview',
        ]),
    }
}
</script>