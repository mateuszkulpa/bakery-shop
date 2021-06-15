<template>
  <product-template v-if="product" :product="product" />
</template>

<script lang="ts">
import { fetchProduct } from "@/api/products";
import useRequest from "@/composables/useRequest";
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
import ProductTemplate from "@/components/templates/Product.vue";

export default defineComponent({
  components: { ProductTemplate },
  setup() {
    const route = useRoute();

    const { data: product } = useRequest(() =>
      fetchProduct(parseInt(route.params.id as string))
    );

    return {
      product,
    };
  },
});
</script>
