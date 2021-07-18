<template>
  <div :class="{ 'animate-shake': hasAnyError }">
    <slot name="label" v-bind="{ label, labelFor }">
      <label
        :class="[
          'text-gray-500 mb-1 block text-sm',
          { 'text-red-500': hasAnyError },
        ]"
        :for="labelFor"
      >
        {{ label }}
      </label>
    </slot>
    <slot></slot>
    <span
      v-if="hasAnyError"
      data-test-id="validation-error"
      class="text-sm text-red-500"
    >
      {{ formattedErrors }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

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
    errors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
  },
  setup(props) {
    const hasAnyError = computed(() => props.errors.length > 0);
    const formattedErrors = computed(() => props.errors.join(", "));

    return { hasAnyError, formattedErrors };
  },
});
</script>
