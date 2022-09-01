<template>
    <div class="p-3 bg-gray-300">
        <div class="flex justify-between">
            <h1>CBT</h1>

            <ul class="mr-6 text-xl flex border border-gray-900 bg-gray-700 text-white p-1 rounded-lg hover:bg-gray-800 hover:text-white">
                <li>Time</li>
                <p class="ml-2">{{countDown}}.00</p>
            </ul>
        </div>


    </div>
</template>

<script>
import { useCbtQuiz } from '../../stores/CbtQuiz'
    export default {
        data () {
            return {
                countDown: 60
            }
        },
        setup() {
        let quiz = useCbtQuiz();
        return {
            quiz
        };
    },
        methods: {
            countDownTimer () {
                if (this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
            }
        },
        mounted () {
            if(this.quiz.count > 0){
                console.log(this.quiz.count)
                this.countDownTimer()
            }
            
        }
    }
</script>