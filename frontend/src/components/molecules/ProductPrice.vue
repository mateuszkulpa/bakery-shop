<template>
  <div>
    <div class="text-2xl">
      <span class="font-extrabold">{{ price }} PLN </span>
    </div>
    <div class="text-gray-500 mb-1 block text-sm">
      Cena za kg: {{ pricePerKg }} PLN
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    weight: {
      type: Number,
      required: true,
    },
    pricePerKg: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const price = computed(() => props.weight * props.pricePerKg);

    return {
      price,
    };
  },
});
</script>
