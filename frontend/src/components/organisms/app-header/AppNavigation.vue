<template>
  <header
    class="py-6 px-4 bg-gradient-to-r from-pink-400 to-red-600 shadow-sm text-white"
  >
    <nav class="max-w-screen-xl mx-auto flex justify-between font-bold">
      <div class="space-x-4">
        <router-link :to="{ name: 'Home' }">Strona główna</router-link>
        <router-link :to="{ name: 'Products' }">Produkty</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Cart' }" class="block relative">
          <shopping-cart-icon class="h-6 w-6" />
          <span
            v-if="cartItemsCount"
            class="absolute -top-2 -right-2 text-sm bg-purple-400 h-4 w-4 rounded-xl flex items-center justify-center text-white font-bold"
          >
            {{ cartItemsCount }}
          </span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import useCart from "@/composables/useCart";
import { defineComponent } from "vue";
import { ShoppingCartIcon } from "@heroicons/vue/outline";

export default defineComponent({
  components: { ShoppingCartIcon },
  setup() {
    const { cartItemsCount } = useCart();

    return {
      cartItemsCount,
    };
  },
});
</script>
