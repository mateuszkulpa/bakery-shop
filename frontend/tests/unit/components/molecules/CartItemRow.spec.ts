import { flushPromises, shallowMount } from "@vue/test-utils";
import CartItemRow from "@/components/molecules/CartItemRow.vue";
import CartItem from "@/types/cartItem";
import { getSingleProductMock } from "../../../mocks/products";
import { RouterLink } from "../../stubs";

const getCartItemMock = (): CartItem => ({
  id: "1",
  product: { ...getSingleProductMock(), pricePerKg: 50 },
  weight: 2,
  remarks: "",
});

const mountCartItem = (props: Record<string, unknown> = {}) =>
  shallowMount(CartItemRow, {
    props: {
      cartItem: getCartItemMock(),
      ...props,
    },
    global: {
      stubs: {
        RouterLink,
      },
    },
  });

let mockRemoveFromCartFn = jest.fn();
jest.mock("@/composables/useCart", () => {
  return () => ({
    removeFromCart: mockRemoveFromCartFn,
  });
});

beforeEach(() => {
  mockRemoveFromCartFn = jest.fn();
})

describe("CartItemRow.vue", () => {
  it("renders a cart item without remove button when readonly prop is passed", async () => {
    const wrapper = mountCartItem({
      readonly: true,
    });

    const removeButton = wrapper.find<HTMLButtonElement>(
      "[data-item-id='remove-cart-item']"
    );

    expect(removeButton.exists()).toBe(false);
  });

  it("remvoes a cart item after click remove button", async () => {
    const wrapper = mountCartItem({
      readonly: false,
    });

    const removeButton = wrapper.find<HTMLButtonElement>(
      "[data-item-id='remove-cart-item']"
    );

    await removeButton.trigger("click");

    expect(mockRemoveFromCartFn).toBeCalled();
  });
});
