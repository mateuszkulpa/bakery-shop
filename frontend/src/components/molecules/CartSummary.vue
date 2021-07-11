<template>
  <div class="text-right text-xl">
    Łączny koszt:
    <span class="font-extrabold" data-test-id="total-price">
      {{ totalPrice }} PLN
    </span>
  </div>
</template>
<script lang="ts">
import CartItem from "@/types/cartItem";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    cartItems: {
      type: Array as PropType<CartItem[]>,
      required: true,
    },
  },
  setup(props) {
    const totalPrice = computed(() =>
      props.cartItems.reduce(
        (acc, item) => acc + item.weight * item.product.pricePerKg,
        0
      )
    );

    return {
      totalPrice,
    };
  },
});
</script>
