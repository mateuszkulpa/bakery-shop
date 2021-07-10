<template>
  <h4 class="mt-6 mb-4 text-2xl">Dane zamówienia</h4>
  <form @submit.prevent="sendOrder">
    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <app-field
        label="Imię i nazwisko"
        label-for="client-name"
        :errors="errors.clientName"
      >
        <app-input v-model="model.clientName" id="client-name" />
      </app-field>

      <app-field
        label="Telefon"
        label-for="client-phone-number"
        :errors="errors.clientPhoneNumber"
      >
        <app-input v-model="model.clientPhoneNumber" id="client-phone-number" />
      </app-field>

      <app-field
        label="Adres"
        label-for="client-adress"
        :errors="errors.clientAddress"
      >
        <app-input v-model="model.clientAddress" id="client-adress" />
      </app-field>

      <app-field
        label="Dostawa"
        label-for="delivery-type"
        :errors="errors.deliveryType"
      >
        <app-select v-model="model.deliveryType" id="delivery-type">
          <option :value="DeliveryType.Pickup">Odbiór osobisty</option>
          <option :value="DeliveryType.Delivery">Dostawa do domu</option>
        </app-select>
      </app-field>

      <app-field
        v-if="model.deliveryType == DeliveryType.Pickup"
        label="Punkt odbioru"
        label-for="pickup-location"
        :errors="errors.clientName"
      >
        <app-select v-model="model.pickupLocation" id="pickup-location">
          <option v-for="shop in shops" :key="shop.id" :value="shop.name">
            {{ shop.name }}
          </option>
        </app-select>
      </app-field>
    </div>

    <div class="mt-6 flex justify-between">
      <app-button tag="router-link" :to="{ name: 'Cart' }" type="secondary"
        >Wróć</app-button
      >
      <app-button native-type="submit" :loading="orderSending">
        Złóż zamówienie
      </app-button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import AppField from "@/components/atoms/AppField.vue";
import AppInput from "@/components/atoms/AppInput.vue";
import AppSelect from "@/components/atoms/AppSelect.vue";
import DeliveryType from "@/types/deliveryType";
import Order from "@/types/order";
import AppButton from "@/components/atoms/AppButton.vue";
import CartItem from "@/types/cartItem";
import useCart from "@/composables/useCart";
import useRequest from "@/composables/useRequest";
import { fetchShops } from "@/api/shops";
import { placeOrder } from "@/api/orders";
import * as yup from "yup";
import useValidation from "@/composables/useValidation";

export default defineComponent({
  components: { AppInput, AppField, AppSelect, AppButton },
  props: {
    cartItems: { type: Array as PropType<CartItem[]>, required: true },
  },
  emits: ["sent"],
  setup(props, { emit }) {
    const { clearCart } = useCart();

    const model = ref<Order>({
      clientName: "",
      clientPhoneNumber: "",
      clientAddress: "",
      deliveryType: DeliveryType.Delivery,
      items: props.cartItems,
    });

    const { errors, validate } = useValidation(model, {
      rules: {
        clientName: yup.string().required(),
        clientPhoneNumber: yup.string().required(),
        clientAddress: yup.string().required(),
        deliveryType: yup
          .string()
          .oneOf([DeliveryType.Pickup, DeliveryType.Delivery]),
        pickupLocation: yup.string().when({
          is: () => model.value.deliveryType == DeliveryType.Pickup,
          then: yup.string().required(),
        }),
      },
    });

    const sendOrder = () => {
      if (!validate()) return;

      orderSending.value = true;
      placeOrder(model.value);
      orderSending.value = false;

      clearCart();
      emit("sent");
    };

    const orderSending = ref(false);

    const { data: shops } = useRequest(fetchShops);

    return {
      DeliveryType,
      model,
      sendOrder,
      orderSending,
      shops,
      errors,
    };
  },
});
</script>
, AppSelect
