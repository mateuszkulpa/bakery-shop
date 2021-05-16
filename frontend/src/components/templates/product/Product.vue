<template>
  <h1 class="text-4xl font-extrabold text-center">{{ product.name }}</h1>
  <figure class="mt-6 aspect-h-6 aspect-w-16 mx-auto">
    <product-image :image="product.coverImage" class="object-cover" />
  </figure>

  <markdown-content class="mt-6 text-justify" :content="product.description" />

  <app-button class="mt-6">Dodaj do koszyka</app-button>
</template>

<script lang="ts">
import Product from "@/types/product";
import { defineComponent, PropType } from "vue";
import AppButton from "@/components/atoms/app-button/AppButton.vue";
import ProductImage from "@/components/atoms/product-image/ProductImage.vue";
import MarkdownContent from "@/components/atoms/markdown-content/MarkdownContent.vue";

export default defineComponent({
  components: { AppButton, ProductImage, MarkdownContent },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>
