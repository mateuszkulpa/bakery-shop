<template>
  <weight-select v-model="form.weight" :product="product" />
  <textarea
    v-model="form.remarks"
    class="w-full border-gray-200 rounded-md mt-4"
    placeholder="Uwagi do zamówienia"
    rows="4"
  />

  <product-price :weight="form.weight" :price-per-kg="product.pricePerKg" />
  <app-button class="mt-4" @click="addToCart"> Dodaj do koszyka</app-button>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import useCart from "@/composables/useCart";
import Product from "@/types/product";
import AppButton from "@/components/atoms/app-button/AppButton.vue";
import { useRouter } from "vue-router";
import WeightSelect from "@/components/molecules/weight-select/WeightSelect.vue";
import ProductPrice from "@/components/molecules/product-price/ProductPrice.vue";

export default defineComponent({
  components: { AppButton, WeightSelect, ProductPrice },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
    const cart = useCart();
    const router = useRouter();

    const form = reactive({
      weight: props.product.minKg,
      remarks: "",
    });

    const addToCart = () => {
      cart.addToCart(props.product, form.weight, form.remarks);
      router.push({ name: "Cart" });
    };

    return {
      addToCart,
      form,
    };
  },
});
</script>
