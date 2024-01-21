<template>
    <section class="blog">
       <article class="blog-post" v-for="(post, index) in blogPosts" :key="index">
         <h2>{{ post.title }}</h2>
         <p>{{ post.excerpt }}</p>
         <button>Read More</button>
       </article>
    </section>
   </template>
   
   <script lang="ts">
   import { defineComponent } from 'vue';
   
   interface BlogPost {
    title: string;
    excerpt: string;
   }
   
   export default defineComponent({
    name: 'Blog',
    data() {
       return {
         blogPosts: [
           // Add your blog posts here
         ] as BlogPost[],
       };
    },
   });
   </script>