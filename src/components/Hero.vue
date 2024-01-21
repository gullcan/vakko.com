<template>
    <section class="hero">
       <div class="hero-text">
         <h1>Hizmetlerimiz</h1>
         <p>Vakko'da çalışan profesyoneller sizin için en uygun çözümleri buluyor ve hedeflerinizi karşılamak için her çabaya vektör.</p>
       </div>
    </section>
   </template>
   
   <script lang="ts">
   import { defineComponent } from 'vue';
   
   export default defineComponent({
    name: 'Hero',
   });
   </script>
   
   <style scoped>
   .hero {
    padding: 3rem 0;
    text-align: center;
    background-color: #f7f7f7;
   }
   
   .hero-text h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
   }
   
   .hero-text p {
    font-size: 1.125rem;
    color: #666;
    margin: 0;
   }
   </style>