<template>
  <home-template :featured-products="products || []" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeTemplate from "@/components/templates/Home.vue";
import useRequest from "@/composables/useRequest";
import { fetchFeaturedProducts } from "@/api/products";

export default defineComponent({
  components: {
    HomeTemplate,
  },
  setup() {
    const { data: products } = useRequest(fetchFeaturedProducts);

    return {
      products,
    };
  },
});
</script>
