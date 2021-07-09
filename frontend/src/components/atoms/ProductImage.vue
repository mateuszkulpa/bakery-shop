<template>
  <img v-bind="$attrs" :src="imageFullUrl" :alt="image.alternativeText" />
</template>

<script lang="ts">
import Image from "@/types/image";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    image: {
      type: Object as PropType<Image>,
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
