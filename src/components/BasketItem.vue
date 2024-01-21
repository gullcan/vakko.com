<template>
  <div class="container">
      <div class="product-list">
          <div class="product-item" v-for="product in products" :key="product.id">
              <h3>{{ product.name }}</h3>
              <p>Fiyat: ₺{{ product.price }},00</p>
          </div>
      </div>
      <div class="summary">
          <div class="summary-title">Toplam ürün sayısı:</div>
          <div class="summary-value">{{ totalItems }}</div>
          <div class="summary-title">Toplam fiyat:</div>
          <div class="summary-value">₺{{ totalPrice }},00</div>
      </div>
  </div>
</template>
   
   <script lang="ts">
import { ref, computed } from 'vue';

export default {
    setup() {
        const products = ref([
            { id: 1, name: 'Ürün 1', price: 100 },
            { id: 2, name: 'Ürün 2', price: 200 },
            // ...
        ]);

        const totalItems = computed(() => products.value.length);
        const totalPrice = computed(() => products.value.reduce((sum, product) => sum + product.price, 0));

        return { products, totalItems, totalPrice };
    },
};
   </script>
   
   <style scoped>

   </style>
