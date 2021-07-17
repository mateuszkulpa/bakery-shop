<template>
  <div class="space-y-12 md:space-y-4">
    <div v-if="cartItems.length === 0" class="text-center space-y-4">
      <span class="text-center text-lg block" data-test-id="cart-no-elements">
        Brak elementów w koszyku
      </span>
      <app-button tag="router-link" :to="{ name: 'Products' }">
        Zobacz produkty
      </app-button>
    </div>
    <cart-item-row
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      :cart-item="cartItem"
      :readonly="readonly"
    />
  </div>
</template>

<script lang="ts">
import AppButton from "@/components/atoms/AppButton.vue";
import CartItemRow from "@/components/molecules/CartItemRow.vue";
import CartItem from "@/types/cartItem";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  components: { CartItemRow, AppButton },
  props: {
    cartItems: { type: Array as PropType<CartItem[]>, required: true },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
