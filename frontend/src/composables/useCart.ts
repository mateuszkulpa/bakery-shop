import CartItem from "@/types/cartItem";
import { computed, ref } from "vue";

const cartItems = ref<CartItem[]>([]);

export default function () {
  const addToCart = (cartItem: CartItem) => {
    cartItems.value.push(cartItem);
  };

  const removeFromCart = (cartItem: CartItem) => {
    cartItems.value = cartItems.value.filter((x) => x !== cartItem);
  };

  return {
    cartItems: computed(() => cartItems.value),
    cartItemsCount: computed(() => cartItems.value.length),
    addToCart,
    removeFromCart,
  };
}
