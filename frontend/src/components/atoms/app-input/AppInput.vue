<template>
  <input
    :type="type"
    :value="modelValue"
    class="border-gray-200 rounded-md w-full"
    v-bind="$attrs"
    @input="($e) => $emit('update:modelValue', $e.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type InputType = "text" | "number";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<InputType>,
      required: false,
      default: "text",
    },
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      required: true,
    },
  },
});
</script>
