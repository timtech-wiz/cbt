<template>
    <div>
        
        <ul class=" mt-3 text-gray-300 grid gap-2">
                
            <li class="flex items-center mb-4">
                <input id="default-radio-1" type="radio" @input="$emit('chosenValue', $event)" name="chosen" :value="option"
                class="w-[1.25rem] h-[1.25rem] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:rounded-full dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-radio-1" class="ml-2 text-lg font-medium text-gray-300 dark:text-gray-300">{{option}}</label>
            </li>
            
        </ul>
        {{chosen}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            chosen:""
        }
    },
    props:['option'],
methods:{
    // userOption(event){
    //     this.$emit('chosenValue', event.target.value)
    // }
}
    

  
 
}
</script>

