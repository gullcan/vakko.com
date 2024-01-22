<template>
   <div class="about">
     <h1>This is an about page</h1>
   </div>
 </template>

   <div class="about">
      <h1>{{ TRANSLATIONS.en.about.title }}</h1>
      <p>{{ TRANSLATIONS.en.about.description }}</p>
   </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
// component.vue
import { TRANSLATIONS } from '../translations.js';
  export default defineComponent({
   data() {
      return {
         TRANSLATIONS
      }
   }
  })
  </script>
  
  <style>
  @media (min-width: 1024px) {
   .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
   }
  }
  </style>../../translations../translations