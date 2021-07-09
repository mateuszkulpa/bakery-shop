<template>
  <div>
    <slot name="label" v-bind="{ label, labelFor }">
      <label class="text-gray-500 mb-1 block text-sm" :for="labelFor">
        {{ label }}
      </label>
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
    labelFor: {
      type: String,
      required: false,
    },
  },
});
</script>
