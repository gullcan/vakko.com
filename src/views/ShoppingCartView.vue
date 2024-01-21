<template>
    <div class="container">
       <div class="header">
         <h1>Sepet</h1>
       </div>
   
       <div class="items">
         <BasketItem
           v-for="product in products"
           :key="product.id"
           :product="product"
         />
       </div>
   
       <div class="total">
         <p>Toplam: ₺ {{ totalPrice }},00</p>
       </div>
    </div>
   </template>
   
   <script lang="ts">
   import { defineComponent, ref, computed } from 'vue';
   import BasketItem from '@/components/BasketItem.vue';
   
   export default defineComponent({
    components: {
       BasketItem,
    },
    setup() {
       const products = ref([
         // Örnek ürünleri ekleyin
       ]);
   
       const totalPrice = computed(() => {
         return products.value.reduce((sum, product) => {
           return sum + product.discountPrice;
         }, 0);
       });
   
       return {
         products,
         totalPrice,
       };
    },
   });
   </script>
   
   <style scoped>
   /* Add your CSS code here */
   @media (min-width: 1024px) {
   .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
   }
  }
   </style>