<template>

     <div class="grid grid-rows-2 justify-end">
         
            <div class="p-12">
               <AppQuestions v-for="items in quiz.singleQuestion"
                :key="items.id"
                :items="items"
                >
               <AppOptions v-for="(option, id) in items.options" :key="id"
               :option="option"
               @chosen-value="handleOption($event)"
               />
               </AppQuestions>

               <div v-if="quiz.count >10">
                <ResultPage :score="score" />
               </div>
               
                 
               
            </div>
             </div>
             
            <div class="m-6 mt-48">
                <div class="flex justify-between w-24">
                    <router-link @click="quiz.count--" v-if="!maxQ.min" to="/quiz" class="mr-9 text-xl border
                    border-gray-400 px-9 py-3 bg-blue-300 hover:bg-transparent 
                    hover:text-white
                    rounded-lg">Prev</router-link>
                    <router-link v-else to="/" class="mr-9 text-xl border
                    border-gray-400 px-9 py-3 bg-blue-300 hover:bg-transparent 
                    hover:text-white
                    rounded-lg">Back</router-link>
                    
                    <router-link @click="quiz.count++" v-if="maxQ.max" to="/quiz" class="mr-9 text-xl border
                    border-gray-400 px-9 py-3 bg-blue-300 hover:bg-transparent 
                    hover:text-white
                    rounded-lg">Next</router-link>

                    <router-link @click="quiz.count++" v-else to="/quiz" class="mr-9 text-xl border
                    border-gray-400 px-9 py-3 bg-blue-300 hover:bg-transparent 
                    hover:text-white
                    rounded-lg">Submit</router-link>
                </div>
               
            </div>
        
    
    
    
</template>

<script>
 
import { useCbtQuiz } from '../../stores/CbtQuiz'
import AppQuestions from './AppQuestions.vue'
import AppOptions from './AppOptions.vue'
import ResultPage from './ResultPage.vue'
export default{

    data(){
        return{
            score:0
        }
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
        },

         
    },

    methods:{
        handleOption(event){
            
            this.quiz.singleQuestion.map(a => {
                if(event.target.value === a.answer){
                    this.score = this.score + 5
                }
                return;

            })
            
        }
    },
    mounted() {
        this.quiz.fillState();
        // console.log(this.chosen)
    },
    components: { AppQuestions, AppOptions, ResultPage }
}

</script>