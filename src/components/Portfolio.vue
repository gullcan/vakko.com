<template>
    <section class="portfolio">
       <div class="portfolio-item" v-for="(project, index) in projects" :key="index">
         <h2>{{ project.title }}</h2>
         <p>{{ project.description }}</p>
         <img :src="project.imgSrc" :alt="project.title">
       </div>
    </section>
   </template>
   
   <script lang="ts">
   import { defineComponent } from 'vue';
   
   export default defineComponent({
    name: 'Portfolio',
    data() {
    return {
    projects: [
    {
    title: 'Proje 1',
    imgSrc: '/img/my-project.png',
    description: 'Proje 1 açıklaması...'
    },
    {
    title: 'Proje 2',
    imgSrc: '/img/my-project.png',
    description: 'Proje 2 açıklaması...'
    },
    {
    title: 'Proje 3',
    imgSrc: '/img/my-project.png',
    description: 'Proje 3 açıklaması...'
    }
    ]
    };
    },
   });
   </script>
   
   <style scoped>
   .portfolio {
    padding: 3rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   }
   
   .portfolio-item {
    flex: 1 1 250px;
    margin: 1rem;
    text-align: center;
   }
   
   .portfolio-item img {
    width: 100%;
    height: auto;
   }
   
   .portfolio-item h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
   }
   
   .portfolio-item p {
    font-size: 1rem;
    color: #666;
    margin: 0;
   }
   </style>