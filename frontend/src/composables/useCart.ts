import CartItem from "@/types/cartItem";
import Product from "@/types/product";
import { computed, ref, watch } from "vue";
import { v4 } from "uuid";
import { useLocalStorage } from "@vueuse/core";

const storage = useLocalStorage<CartItem[]>("cart-items", []);

const cartItems = ref<CartItem[]>(storage.value);

watch(cartItems, (newCartItems) => {
  storage.value = newCartItems;
});

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

  const clearCart = () => {
    cartItems.value = [];
  };

  return {
    cartItems: computed(() => cartItems.value),
    cartItemsCount: computed(() => cartItems.value.length),
    addToCart,
    removeFromCart,
    clearCart,
  };
}
