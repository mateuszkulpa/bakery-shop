<template>
  <div class="max-w-2xl mx-auto space-y-8">
    <cart-table :cart-items="cartItems" />

    <cart-summary v-if="cartItems.length > 0" :cart-items="cartItems" />

    <div v-if="cartItems.length > 0" class="flex justify-between">
      <app-button
        type="secondary"
        tag="router-link"
        :to="{ name: 'Products' }"
        data-test-id="order-more"
      >
        Zamów więcej
      </app-button>
      <app-button
        tag="router-link"
        :to="{ name: 'Checkout' }"
        data-test-id="go-to-checkout"
      >
        Przejdź dalej
      </app-button>
    </div>
  </div>
</template>

<script lang="ts">
import CartTable from "@/components/organisms/CartTable.vue";
import CartItem from "@/types/cartItem";
import AppButton from "@/components/atoms/AppButton.vue";
import { defineComponent, PropType } from "vue";
import CartSummary from "@/components/molecules/CartSummary.vue";

export default defineComponent({
  components: { CartTable, AppButton, CartSummary },
  props: {
    cartItems: {
      type: Array as PropType<CartItem[]>,
      required: true,
    },
  },
});
</script>
