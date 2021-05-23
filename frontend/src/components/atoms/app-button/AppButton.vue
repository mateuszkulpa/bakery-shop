<template>
  <component
    class="inline-block px-6 py-3 font-bold text-white bg-purple-500 hover:bg-purple-600 transition rounded-md"
    :is="tag"
    v-bind="$attrs"
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
