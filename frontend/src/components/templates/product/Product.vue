<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <div class="col-span-3">
      <h1 class="text-4xl font-extrabold text-center">{{ product.name }}</h1>
      <figure
        class="mt-6 aspect-h-6 aspect-w-16 mx-auto rounded-md overflow-hidden"
      >
        <product-image :image="product.coverImage" class="object-cover" />
      </figure>

      <div class="flex mt-4 space-x-4 overflow-x-auto">
        <product-image
          class="w-32 h-32 object-cover rounded-md"
          v-for="image in product.images"
          :image="image"
          :key="image.id"
        />
      </div>

      <markdown-content
        class="mt-6 prose max-w-none text-justify"
        :content="product.description"
      />
    </div>

    <div class="mt-4 lg:mt-16 rounded-lg">
      <add-to-cart :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import Product from "@/types/product";
import { defineComponent, PropType } from "vue";
import ProductImage from "@/components/atoms/product-image/ProductImage.vue";
import MarkdownContent from "@/components/atoms/markdown-content/MarkdownContent.vue";
import AddToCart from "@/components/organisms/add-to-cart/AddToCart.vue";

export default defineComponent({
  components: {
    ProductImage,
    MarkdownContent,
    AddToCart,
  },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>
