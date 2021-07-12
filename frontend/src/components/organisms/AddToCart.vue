<template>
  <form @submit.prevent="addToCart">
    <weight-select v-model="form.weight" :product="product" id="weight" />

    <app-field label="Uwagi do zamówienia" label-for="remarks" class="mt-4">
      <app-textarea v-model="form.remarks" rows="4" id="remarks" />
    </app-field>

    <product-price :weight="form.weight" :price-per-kg="product.pricePerKg" />
    <app-button class="mt-4" native-type="submit">
      Dodaj do koszyka
    </app-button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import useCart from "@/composables/useCart";
import Product from "@/types/product";
import AppField from "@/components/atoms/AppField.vue";
import AppTextarea from "@/components/atoms/AppTextarea.vue";
import AppButton from "@/components/atoms/AppButton.vue";
import { useRouter } from "vue-router";
import WeightSelect from "@/components/molecules/WeightSelect.vue";
import ProductPrice from "@/components/molecules/ProductPrice.vue";

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
