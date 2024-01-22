<template>
    <div class="mini-basket">
      <h2>Mini Basket</h2>
      <p v-if="basketItems.length === 0">Your basket is empty.</p>
      <ul v-else>
        <li v-for="item in basketItems" :key="item.id">
          {{ item.productName }} - {{ item.quantity }} x {{ item.price }}
        </li>
      </ul>
      <p v-if="basketItems.length > 0">Total: {{ total }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  
  interface BasketItem {
    id: number;
    productName: string;
    quantity: number;
    price: number;
  }
  
  export default defineComponent({
    name: 'MiniBasket',
    props: {
      basketItems: {
        type: Array as () => BasketItem[],
        required: true,
      },
    },
    setup(props) {
      const total = computed(() => {
        return props.basketItems.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0);
      });
  
      return {
        total,
      };
    },
  });
  </script>
  
  <style scoped>
  .mini-basket {
    border: 1px solid #ccc;
    padding: 1rem;
  }
  </style>
