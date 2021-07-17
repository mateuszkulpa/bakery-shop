import Cart from "@/components/templates/Cart.vue";
import CartItem from "@/types/cartItem";
import { mount, shallowMount } from "@vue/test-utils";
import { getSingleProductMock } from "../../../mocks/products";
import { RouterLink } from "../../stubs";

describe("Cart.vue", () => {
  it("displays a action buttons when cart items is not empty", () => {
    const cartItems: CartItem[] = [
      {
        id: "1",
        product: getSingleProductMock(),
        weight: 2,
        remarks: "",
      },
    ];

    const wrapper = mount(Cart, {
      props: {
        cartItems,
      },
      global: {
        stubs: {
          RouterLink,
        },
      },
    });

    expect(wrapper.find("[data-test-id='order-more']").exists()).toBe(true);
    expect(wrapper.find("[data-test-id='go-to-checkout']").exists()).toBe(true);
  });
});
