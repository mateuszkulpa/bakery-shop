<template>
  <weight-select v-model="form.weight" :product="product" />

  <app-field label="Uwagi do zamówienia" class="mt-4">
    <app-textarea v-model="form.remarks" rows="4" />
  </app-field>

  <product-price :weight="form.weight" :price-per-kg="product.pricePerKg" />
  <app-button class="mt-4" @click="addToCart"> Dodaj do koszyka</app-button>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import useCart from "@/composables/useCart";
import Product from "@/types/product";
import AppField from "@/components/atoms/app-field/AppField.vue";
import AppTextarea from "@/components/atoms/app-textarea/AppTextarea.vue";
import AppButton from "@/components/atoms/app-button/AppButton.vue";
import { useRouter } from "vue-router";
import WeightSelect from "@/components/molecules/weight-select/WeightSelect.vue";
import ProductPrice from "@/components/molecules/product-price/ProductPrice.vue";

export default defineComponent({
  components: { AppButton, WeightSelect, ProductPrice, AppTextarea, AppField },
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
