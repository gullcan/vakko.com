<template>
    <form @submit.prevent="submitForm">
      <label for="email">
        Join our newsletter and get
        <strong>20% off</strong> your first order:
      </label>
      <input v-model.trim="email" id="email" type="email" required />
      <button type="submit" :disabled="!emailValid">Subscribe</button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'SubscriptionForm',
    setup() {
      const email = ref('');
      const emailValid = ref(false);
  
      const submitForm = () => {
        // Handle form submission here
      };
  
      return {
        email,
        emailValid,
        submitForm,
      };
    },
  });
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #349e67;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>