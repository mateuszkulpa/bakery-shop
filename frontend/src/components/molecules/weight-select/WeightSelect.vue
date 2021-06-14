<template>
  <app-field label="Waga">
    <app-select
      :value="modelValue"
      @update:modelValue="(val) => $emit('update:modelValue', Number(val))"
    >
      <option
        v-for="option in weightsOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </app-select>
  </app-field>
</template>

<script lang="ts">
import AppSelect from "@/components/atoms/app-select/AppSelect.vue";
import AppField from "@/components/atoms/app-field/AppField.vue";
import Product from "@/types/product";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  components: { AppSelect, AppField },
  props: {
    modelValue: {
      type: Number,
    },
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
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

    return {
      weightsOptions,
    };
  },
});
</script>
