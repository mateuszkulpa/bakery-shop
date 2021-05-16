<template>
  <component
    class="px-4 py-2 font-bold text-white bg-purple-500 hover:bg-purple-600 transition rounded-md shadow-md"
    :is="tag"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: "button",
    },
  },
});
</script>

<style lang="scss" scoped></style>
