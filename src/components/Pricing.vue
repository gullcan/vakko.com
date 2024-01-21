<template>
    <section class="pricing">
       <div class="pricing-plan" v-for="(plan, index) in pricingPlans" :key="index">
         <h2>{{ plan.title }}</h2>
         <p>{{ plan.description }}</p>
         <h3>{{ plan.price }}</h3>
         <ul>
           <li v-for="(feature, index) in plan.features" :key="index">{{ feature }}</li>
         </ul>
         <button>{{ plan.buttonText }}</button>
       </div>
    </section>
   </template>
   
   <script lang="ts">
   import { defineComponent } from 'vue';
   
   interface PricingPlan {
    title: string;
    description: string;
    price: string;
    features: string[];
    buttonText: string;
   }
   
   export default defineComponent({
    name: 'Pricing',
    data() {
       return {
         pricingPlans: [
           // Add your pricing plans here
         ] as PricingPlan[],
       };
    },
   });
   </script>