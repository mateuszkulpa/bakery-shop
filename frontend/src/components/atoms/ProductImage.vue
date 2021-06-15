<template>
  <img v-bind="$attrs" :src="imageFullUrl" :alt="image.alternativeText" />
</template>

<script lang="ts">
import ProductImage from "@/types/productImage";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    image: {
      type: Object as PropType<ProductImage>,
      required: true,
    },
  },
  setup(props) {
    const imageFullUrl = computed(
      () => process.env.VUE_APP_BASE_API_URL + props.image.url
    );

    return {
      imageFullUrl,
    };
  },
});
</script>
