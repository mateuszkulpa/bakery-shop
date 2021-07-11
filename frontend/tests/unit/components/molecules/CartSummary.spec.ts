import { shallowMount } from "@vue/test-utils";
import CartSummary from "@/components/molecules/CartSummary.vue";
import CartItem from "@/types/cartItem";
import { getSingleProductMock } from "../../../mocks/products";

describe("CartSummary.vue", () => {
  it("renders a proper calculated cart summary", async () => {
    const cartItems: CartItem[] = [
      {
        id: "1",
        product: { ...getSingleProductMock(), pricePerKg: 50 },
        weight: 2,
        remarks: "",
      },
      {
        id: "2",
        product: { ...getSingleProductMock(), pricePerKg: 100 },
        weight: 2,
        remarks: "",
      },
    ];

    const wrapper = shallowMount(CartSummary, { props: { cartItems } });
    const totalPrice = wrapper.find("[data-test-id='total-price']");

    expect(totalPrice.text()).toMatch(`300 PLN`);
  });
});
