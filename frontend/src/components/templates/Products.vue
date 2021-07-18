<template>
  <section-title data-test-id="products-title">
    Zamów torty z dowozem
  </section-title>

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
import ProductCard from "@/components/molecules/ProductCard.vue";
import SectionTitle from "@/components/atoms/SectionTitle.vue";

export default defineComponent({
  components: { ProductCard, SectionTitle },
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
});
</script>
