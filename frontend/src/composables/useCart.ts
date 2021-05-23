import CartItem from "@/types/cartItem";
import Product from "@/types/product";
import { computed, ref } from "vue";
import { v4 } from "uuid";

const cartItems = ref<CartItem[]>([]);

export default function () {
  const addToCart = (product: Product, weight: number, remarks: string) => {
    const newCartItem: CartItem = {
      id: v4(),
      product: product,
      weight: weight,
      remarks: remarks,
    };

    cartItems.value.push(newCartItem);
  };

  const removeFromCart = (cartItem: CartItem) => {
    cartItems.value = cartItems.value.filter((x) => x.id !== cartItem.id);
  };

  return {
    cartItems: computed(() => cartItems.value),
    cartItemsCount: computed(() => cartItems.value.length),
    addToCart,
    removeFromCart,
  };
}
