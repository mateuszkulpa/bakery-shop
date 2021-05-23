<template>
  <section-title>Koszyk</section-title>
  <cart-template :cart-items="cartItems" />
</template>

<script lang="ts">
import useCart from "@/composables/useCart";
import { defineComponent } from "vue";
import CartTemplate from "@/components/templates/cart/Cart.vue";
import SectionTitle from "@/components/atoms/section-title/SectionTitle.vue";

export default defineComponent({
  components: { CartTemplate, SectionTitle },
  setup() {
    const { cartItems } = useCart();

    return { cartItems };
  },
});
</script>
