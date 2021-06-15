<template>
  <section-title>Podsumowanie</section-title>
  <checkout-template :cart-items="cartItems" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CheckoutTemplate from "@/components/templates/Checkout.vue";
import SectionTitle from "@/components/atoms/SectionTitle.vue";

import useCart from "@/composables/useCart";

export default defineComponent({
  components: { CheckoutTemplate, SectionTitle },
  setup() {
    const { cartItems } = useCart();

    return { cartItems };
  },
});
</script>
