<template>
  <div class="md:flex" data-test-id="cart-item-row">
    <product-image
      class="mb-4 md:mb-0 w-48 object-cover rounded-md shadow-lg"
      :image="cartItem.product.coverImage"
    />

    <div class="md:ml-4 flex flex-col space-y-4 justify-between w-full">
      <router-link
        :to="{
          name: 'Product',
          params: { id: cartItem.product.id, slug: cartItem.product.slug },
        }"
        class="text-3xl font-extrabold"
      >
        {{ cartItem.product.name }}
      </router-link>

      <div>
        <label class="text-gray-500 mb-1 block text-sm">Waga</label>
        {{ cartItem.weight }} KG
      </div>

      <div v-if="cartItem.remarks">
        <label class="text-gray-500 mb-1 block text-sm">Uwagi</label>
        {{ cartItem.remarks }}
      </div>

      <div class="grid grid-cols-2">
        <product-price
          :weight="cartItem.weight"
          :price-per-kg="cartItem.product.pricePerKg"
        />
        <div class="flex justify-end">
          <button
            v-if="!readonly"
            class="px-4"
            @click="onRemove"
            data-item-id="remove-cart-item"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CartItem from "@/types/cartItem";
import { defineComponent, PropType } from "vue";
import useCart from "@/composables/useCart";
import ProductImage from "@/components/atoms/ProductImage.vue";
import ProductPrice from "@/components/molecules/ProductPrice.vue";

export default defineComponent({
  components: {
    ProductImage,
    ProductPrice,
  },
  props: {
    cartItem: {
      type: Object as PropType<CartItem>,
      required: true,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const cart = useCart();

    const onRemove = () => {
      cart.removeFromCart(props.cartItem);
    };

    return { onRemove };
  },
});
</script>
