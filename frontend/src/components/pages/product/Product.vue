<template>
  <app-page width="md">
    <product-template v-if="product" :product="product" />
  </app-page>
</template>

<script lang="ts">
import { fetchProduct } from "@/api/products";
import useRequest from "@/composables/useRequest";
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
import AppPage from "@/components/organisms/app-page/AppPage.vue";
import ProductTemplate from "@/components/templates/product/Product.vue";

export default defineComponent({
  components: { AppPage, ProductTemplate },
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
