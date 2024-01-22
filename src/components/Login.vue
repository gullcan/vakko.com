<template>
    <div class="auth-wrapper">
       <h2>Login</h2>
       <form @submit.prevent="login">
         <div class="form-group">
           <label for="email">Email</label>
           <input v-model="email" id="email" type="email" required />
         </div>
         <div class="form-group">
           <label for="password">Password</label>
           <input v-model="password" id="password" type="password" required />
         </div>
         <button type="submit">Login</button>
       </form>
       <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
   </template>
   
   <script lang="ts">
   import { defineComponent, ref } from 'vue';
   
   export default defineComponent({
    name: 'Login',
    setup() {
       const email = ref('');
       const password = ref('');
       const errorMessage = ref('');
   
       const login = async () => {
         try {
           // Login logic goes here
           // For example, you can use Axios to send a request to your server's login endpoint
         } catch (err) {
           errorMessage.value = err.message;
         }
       };
   
       return {
         email,
         password,
         errorMessage,
         login,
       };
    },
   });
   </script>
   
   <style scoped>
   .auth-wrapper {
    border: 1px solid #ccc;
    padding: 1rem;
   }
   
   .form-group {
    margin-bottom: 1rem;
   }
   
   .error-message {
    color: red;
   }
   </style>
