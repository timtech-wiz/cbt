<template>

     <div class="grid grid-rows-2 justify-end">
         
            <div class="p-12">
                <div v-for="items in quiz.singleQuestion" :key="items.id" class="flex text-white text-2xl">
                <span>{{items.id}}.</span>
                <p class="ml-3">{{items.question}}</p>
                </div>
                
                <ul v-for="option in quiz.singleQuestion" :key="option.id" class="mt-3 text-gray-300 text-xl grid gap-2">
                    <li  class="flex"><input type="radio" v-model="chosen">
                    <p class="ml-2">{{option.options[0]}}</p></li>
                    <li class="flex"><input type="radio" v-model="chosen">
                    <p class="ml-2">{{option.options[1]}}</p></li>
                    <li class="flex"><input type="radio" v-model="chosen">
                    <p class="ml-2">{{option.options[2]}}</p></li>
                    <li class="flex"><input type="radio" v-model="chosen">
                    <p class="ml-2">{{option.options[3]}}</p></li>
                </ul>
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
                </div>
               
            </div>
        </div>
        
    
    
</template>

<script>
import { useCbtQuiz } from '../../stores/CbtQuiz'
export default{

    data(){
        return{
            chosen:false
        }
    },
    setup(){
        let quiz = useCbtQuiz()
        return{
            quiz
        }
    },
    computed:{
        maxQ(){
             return{
                max:this.quiz.count < 10,
                min:this.quiz.count <= 1
             }
        }
    },

    mounted(){
        this.quiz.fillState()
    }
}

</script>