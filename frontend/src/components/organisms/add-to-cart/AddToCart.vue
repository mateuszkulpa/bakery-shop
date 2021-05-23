<template>
  <select v-model="form.weight" class="w-full border-gray-200 rounded-md">
    <option
      v-for="option in weightsOptions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>

  <textarea
    v-model="form.remarks"
    class="w-full border-gray-200 rounded-md mt-4"
    placeholder="Uwagi do zamówienia"
    rows="4"
  />

  <div class="mt-4 text-2xl">
    Cena torta:
    <span class="font-bold">{{ price }} zł </span>
  </div>
  <div class="text-sm text-gray-500">
    Cena za kg:
    <span class="font-bold">{{ product.pricePerKg }} zł </span>
  </div>
  <app-button class="mt-4" @click="addToCart"> Dodaj do koszyka</app-button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from "vue";
import useCart from "@/composables/useCart";
import Product from "@/types/product";
import AppButton from "@/components/atoms/app-button/AppButton.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { AppButton },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
    const cart = useCart();
    const router = useRouter();

    const allowedWeights = computed(() => {
      const { minKg, maxKg } = props.product;
      const kgDivideValue = 0.5;
      const allowedWeights = new Array((maxKg - minKg) / kgDivideValue + 1)
        .fill(minKg)
        .map((value, index) => minKg + index * kgDivideValue);

      return allowedWeights;
    });

    const weightsOptions = computed(() => {
      return allowedWeights.value.map((x) => ({ value: x, label: `${x} KG` }));
    });

    const form = reactive({
      weight: weightsOptions.value[0].value,
      remarks: "",
    });

    const price = computed(() => form.weight * props.product.pricePerKg);

    const addToCart = () => {
      cart.addToCart({
        product: props.product,
        weight: form.weight,
        remarks: form.remarks,
      });
      router.push({ name: "Cart" });
    };

    return {
      allowedWeights,
      weightsOptions,
      addToCart,
      form,
      price,
    };
  },
});
</script>
