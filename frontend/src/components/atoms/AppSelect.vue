<template>
  <select
    :value="modelValue"
    @change="($e) => $emit('update:modelValue', $e.target.value)"
    class="w-full border-gray-200 rounded-md"
  >
    <slot />
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: { type: [Object, String, Number] },
  },
});
</script>
