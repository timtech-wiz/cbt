import { defineStore} from "pinia";

export const useCbtQuiz = defineStore('quiz', {
    state(){
        return{
            quiz:[],
            count:1
        }
    },

    getters:{
        quizQuestions(){
            return this.quiz
        },
        singleQuestion(){
            return this.quiz.filter(a => a.id == this.count)
        }
    },

    actions:{
        fillState(){
            fetch("http://localhost:3001/cbt")
            .then(response => response.json())
            .then(res => {
                this.quiz = res
            })
        }
       
    }
})