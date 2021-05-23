<template>
  <header class="py-4 bg-gray-100">
    <nav class="max-w-screen-xl mx-auto space-x-4 flex">
      <router-link :to="{ name: 'Home' }">Strona główna</router-link>
      <router-link :to="{ name: 'Products' }">Produkty</router-link>
      <router-link :to="{ name: 'Cart' }">
        Koszyk
        <span v-if="cartItemsCount">({{ cartItemsCount }})</span>
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import useCart from "@/composables/useCart";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { cartItemsCount } = useCart();

    return {
      cartItemsCount,
    };
  },
});
</script>
