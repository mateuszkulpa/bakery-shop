<template>
  <component
    :class="[
      'inline-block px-6 py-3 font-bold transition rounded-md',
      { 'text-white bg-purple-500 hover:bg-purple-600': type === 'primary' },
      { 'text-black bg-white hover:bg-gray-100 border': type === 'secondary' },
    ]"
    :is="tag"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
type ButtonType = "primary" | "secondary";

export default defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: "button",
    },
    type: {
      type: String as PropType<ButtonType>,
      default: "primary",
    },
  },
});
</script>

<style lang="scss" scoped></style>
