<template>
  <section-title>Podsumowanie</section-title>
  <checkout-template :cart-items="cartItems" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CheckoutTemplate from "@/components/templates/checkout/Checkout.vue";
import SectionTitle from "@/components/atoms/section-title/SectionTitle.vue";

import useCart from "@/composables/useCart";

export default defineComponent({
  components: { CheckoutTemplate, SectionTitle },
  setup() {
    const { cartItems } = useCart();

    return { cartItems };
  },
});
</script>
