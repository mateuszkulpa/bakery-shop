<template>
  <h1 class="text-4xl font-extrabold text-center mb-8">
    Zamów torty z dowozem
  </h1>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Product from "@/types/product";
import ProductCard from "@/components/molecules/product-card/ProductCard.vue";

export default defineComponent({
  components: { ProductCard },
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
});
</script>
