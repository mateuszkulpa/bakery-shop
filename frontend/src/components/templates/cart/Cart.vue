<template>
  cart cartItems
  {{ cartItems }}
</template>

<script lang="ts">
import CartItem from "@/types/cartItem";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    cartItems: {
      type: Array as PropType<CartItem[]>,
      required: true,
    },
  },
});
</script>
