<!-- <script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script> -->

<template>
  <div class="flex flex-col min-h-screen justify-between">
   
     <AppHeader />
     <main class="flex flex-grow bg-gray-800">
        <RouterView />
     </main>
        
     <AppFooter />
  </div>

 
   
</template>


<script>
import AppHeader from './components/partials/AppHeader.vue';
import AppFooter from './components/partials/AppFooter.vue';
 
export default {

  components:{
    AppHeader,
    AppFooter
   
}
  
}
</script>
 