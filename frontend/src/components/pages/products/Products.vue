<template>
  <products-template :products="products" v-if="products" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchProducts } from "@/api/products";
import useRequest from "@/composables/useRequest";
import ProductsTemplate from "@/components/templates/prodcuts/Products.vue";

export default defineComponent({
  components: { ProductsTemplate },
  setup() {
    const { data: products } = useRequest(fetchProducts);

    return {
      products,
    };
  },
});
</script>
