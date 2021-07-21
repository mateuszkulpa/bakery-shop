<template>
  <router-link
    :to="{ name: 'Product', params: { id: product.id, slug: product.slug } }"
    class="shadow-lg rounded-xl overflow-hidden"
    data-test-id="product-card"
  >
    <figure class="aspect-w-16 aspect-h-12">
      <product-image class="object-cover" :image="product.coverImage" />
    </figure>

    <div class="px-4 py-6">
      <div>
        <span
          class="text-sm text-gray-500 mr-2"
          v-for="category in product.categories"
          :key="category.id"
          data-test-id="product-category"
        >
          {{ category.name }}
        </span>
      </div>
      <h3 class="text-lg font-bold" data-test-id="product-title">
        {{ product.name }}
      </h3>
      <div data-test-id="product-price">
        <span class="font-bold text-3xl">{{ product.pricePerKg }} PLN</span>
        <span class="text-lg text-gray-500"> / kg</span>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Product from "@/types/product";
import { defineComponent, PropType } from "vue";
import ProductImage from "@/components/atoms/ProductImage.vue";

export default defineComponent({
  components: { ProductImage },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>
