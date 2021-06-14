<template>
  <textarea
    :value="modelValue"
    class="border-gray-200 rounded-md w-full"
    v-bind="$attrs"
    @input="($e) => $emit('update:modelValue', $e.target.value)"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: [String] as PropType<string>,
      required: true,
    },
  },
});
</script>
