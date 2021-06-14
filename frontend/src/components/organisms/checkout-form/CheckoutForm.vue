<template>
  <h4 class="mt-6 mb-4 text-2xl">Dane zamówienia</h4>
  <div class="grid md:grid-cols-2 gap-4 mb-8">
    <app-field label="Imię i nazwisko">
      <app-input v-model="order.clientName" />
    </app-field>

    <app-field label="Telefon">
      <app-input v-model="order.clientPhoneNumber" />
    </app-field>

    <app-field label="Adres">
      <app-input v-model="order.clientAddress" />
    </app-field>

    <app-field label="Dostawa">
      <app-select v-model="order.deliveryType">
        <option :value="DeliveryType.Pickup">Odbiór osobisty</option>
        <option :value="DeliveryType.Delivery">Dostawa do domu</option>
      </app-select>
    </app-field>
  </div>

  <div class="mt-6 flex justify-between">
    <app-button tag="router-link" :to="{ name: 'Cart' }" type="secondary"
      >Wróć</app-button
    >
    <app-button @click="sendOrder" :loading="orderSending">
      Złóż zamówienie
    </app-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import AppField from "@/components/atoms/app-field/AppField.vue";
import AppInput from "@/components/atoms/app-input/AppInput.vue";
import AppSelect from "@/components/atoms/app-select/AppSelect.vue";
import DeliveryType from "@/types/deliveryType";
import Order from "@/types/order";
import AppButton from "@/components/atoms/app-button/AppButton.vue";
import CartItem from "@/types/cartItem";
import delay from "@/utils/delay";
import useCart from "@/composables/useCart";

export default defineComponent({
  components: { AppInput, AppField, AppSelect, AppButton },
  props: {
    cartItems: { type: Array as PropType<CartItem[]>, required: true },
  },
  emits: ["sent"],
  setup(props, { emit }) {
    const { clearCart } = useCart();

    const order = ref<Order>({
      clientName: "",
      clientPhoneNumber: "",
      clientAddress: "",
      deliveryType: DeliveryType.Pickup,
      items: props.cartItems,
    });

    const orderSending = ref(false);

    const sendOrder = async () => {
      // TODO call to api
      orderSending.value = true;
      await delay(1000);
      orderSending.value = false;

      clearCart();
      emit("sent");
    };

    return {
      DeliveryType,
      order,
      sendOrder,
      orderSending,
    };
  },
});
</script>
, AppSelect
