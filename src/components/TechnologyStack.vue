<template>
    <section class="technology-stack">
       <div class="tech-item" v-for="(tech, index) in technologies" :key="index">
         <img :src="tech.imgSrc" :alt="tech.name">
         <h2>{{ tech.name }}</h2>
         <p>{{ tech.description }}</p>
       </div>
    </section>
   </template>
   
   <script lang="ts">
   import { defineComponent } from 'vue';
   
   export default defineComponent({
    name: 'TechnologyStack',
    data() {
    return {
    technologies: [
    {
    name: 'Vue.js',
    imgSrc: 'img/vue.svg',
    description: 'A progressive JavaScript framework for building user interfaces.'
    },
    {
    name: 'TypeScript',
    imgSrc: 'img/typescript.svg',
    description: 'A statically typed superset of JavaScript that adds optional types to the language.'
    },
    {
    name: 'Vite',
    imgSrc: 'img/vite.svg',
    description: 'A fast, lightweight build tool for modern web projects.'
    },
    {
    name: 'SCSS',
    imgSrc: 'img/scss.svg',
    description: 'A preprocessor for CSS that adds variables, functions, and other features.'
    }
    ]
    };
    },
   });
   </script>
   
   <style scoped>
   .technology-stack {
    padding: 3rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   }
   
   .tech-item {
    flex: 1 1 250px;
    margin: 1rem;
    text-align: center;
   }
   
   .tech-item img {
    width: 100px;
    height: 100px;
   }
   
   .tech-item h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
   }
   
   .tech-item p {
    font-size: 1rem;
    color: #666;
    margin: 0;
   }
   </style>