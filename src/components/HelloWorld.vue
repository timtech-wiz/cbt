<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <!-- <h1 class="text-red-900 border-2 bg-gray-600 py-3 px-5 rounded-lg">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3> -->
    {{questions}}
  </div>
</template>

<script>
 
export default {
  data(){
    return{
      questions:[]
    }
  },

  mounted(){
    fetch('http://localhost:3001/cbt')
    .then(response => response.json())
    .then(res => {
      this.questions = res
    })
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
