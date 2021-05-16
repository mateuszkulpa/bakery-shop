<template>
  <div :class="['py-12 px-4 mx-auto', maxScreenClass]" v-bind="$attrs">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    width: {
      type: String,
      required: false,
      default: "xl",
    },
  },
  setup(props) {
    const maxScreenClass = computed(() => {
      return `max-w-screen-${props.width}`;
    });

    return { maxScreenClass };
  },
});
</script>
