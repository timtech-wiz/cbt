<template>

    <div>
        <app-quiz />
    </div>
</template>

<script>
import { useCbtQuiz } from '../../stores/CbtQuiz'
import AppQuiz from './AppQuiz.vue'
export default{
    data() {
        return {
            chosen: ""
        };
    },
    setup() {
        let quiz = useCbtQuiz();
        return {
            quiz
        };
    },
    computed: {
        maxQ() {
            return {
                max: this.quiz.count < 10,
                min: this.quiz.count <= 1
            };
        }
    },
    mounted() {
        this.quiz.fillState();
        // console.log(this.chosen)
    },
    components: { AppQuiz }
}

</script>