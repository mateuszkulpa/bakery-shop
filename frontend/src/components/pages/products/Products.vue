<template>
  <app-page>
    <products-template :products="products" v-if="products" />
  </app-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchProducts } from "@/api/products";
import useRequest from "@/composables/useRequest";

import AppPage from "@/components/organisms/app-page/AppPage.vue";
import ProductsTemplate from "@/components/templates/prodcuts/Products.vue";

export default defineComponent({
  components: { AppPage, ProductsTemplate },
  setup() {
    const { data: products } = useRequest(fetchProducts);

    return {
      products,
    };
  },
});
</script>
