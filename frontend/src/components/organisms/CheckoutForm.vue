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

    <app-field
      label="Punkt odbioru"
      v-if="order.deliveryType == DeliveryType.Pickup"
    >
      <app-select v-model="order.pickupLocation">
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
    <app-button @click="sendOrder" :loading="orderSending">
      Złóż zamówienie
    </app-button>
  </div>
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
      deliveryType: DeliveryType.Delivery,
      items: props.cartItems,
    });

    const orderSending = ref(false);

    const sendOrder = async () => {
      orderSending.value = true;
      placeOrder(order.value);
      orderSending.value = false;

      clearCart();
      emit("sent");
    };

    const { data: shops } = useRequest(fetchShops);

    return {
      DeliveryType,
      order,
      sendOrder,
      orderSending,
      shops,
    };
  },
});
</script>
, AppSelect
