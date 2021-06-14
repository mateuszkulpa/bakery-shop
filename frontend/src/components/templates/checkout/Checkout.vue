<template>
  <div>
    <div class="max-w-2xl mx-auto">
      <cart-table :cart-items="cartItems" readonly />
      <cart-summary v-if="cartItems.length > 0" :cart-items="cartItems" />
      <checkout-form :cart-items="cartItems" @sent="onOrderSent" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CartSummary from "@/components/molecules/cart-summary/CartSummary.vue";
import CheckoutForm from "@/components/organisms/checkout-form/CheckoutForm.vue";
import CartTable from "@/components/organisms/cart-table/CartTable.vue";
import CartItem from "@/types/cartItem";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { CartSummary, CartTable, CheckoutForm },
  props: {
    cartItems: { type: Array as PropType<CartItem[]>, required: true },
  },
  setup() {
    const router = useRouter();
    const onOrderSent = () => {
      // TODO show notification or redirect to thank you page
      router.push({ name: "ThankYou" });
    };

    return { onOrderSent };
  },
});
</script>
