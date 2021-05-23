<template>
  <h3 class="text-4xl font-extrabold text-center">Koszyk</h3>
  <cart-template :cart-items="cartItems" />
</template>

<script lang="ts">
import useCart from "@/composables/useCart";
import { defineComponent } from "vue";
import CartTemplate from "@/components/templates/cart/Cart.vue";

export default defineComponent({
  components: { CartTemplate },
  setup() {
    const { cartItems } = useCart();

    return { cartItems };
  },
});
</script>
