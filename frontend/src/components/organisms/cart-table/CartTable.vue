<template>
  <div class="space-y-12 md:space-y-4">
    <div v-if="cartItems.length === 0" class="text-center space-y-4">
      <span class="text-center text-lg block"> Brak elementów w koszyku </span>
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
import AppButton from "@/components/atoms/app-button/AppButton.vue";
import CartItemRow from "@/components/molecules/cart-item-row/CartItemRow.vue";
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
