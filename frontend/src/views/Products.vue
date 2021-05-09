<template>
  <h1 class="text-4xl font-extrabold text-center mb-8">Lista tortów</h1>
  <div class="grid md:grid-cols-3 gap-6">
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "@/components/cards/ProductCard.vue";
export default defineComponent({
  components: { ProductCard },
});
</script>
