<template>
  <div>
    <slot name="label" v-bind="{ label }">
      <label class="text-gray-500 mb-1 block text-sm">{{ label }}</label>
    </slot>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
