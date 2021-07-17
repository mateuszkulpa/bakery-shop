import { shallowMount } from "@vue/test-utils";
import CartTable from "@/components/organisms/CartTable.vue";
import CartItem from "@/types/cartItem";
import { getSingleProductMock } from "../../../mocks/products";

describe("CartTable.vue", () => {
  it("shows a message about no elements", async () => {
    const wrapper = shallowMount(CartTable, {
      props: {
        cartItems: [],
      },
    });

    expect(wrapper.find("[data-test-id='cart-no-elements']").exists()).toBe(
      true
    );
  });

  it("displays a single cart item row", () => {
    const cartItems: CartItem[] = [
      {
        id: "1",
        product: getSingleProductMock(),
        weight: 2,
        remarks: "",
      },
    ];

    const wrapper = shallowMount(CartTable, {
      props: {
        cartItems,
      },
    });

    const cartItemRowsStubs = wrapper.findAll("cart-item-row-stub");

    expect(cartItemRowsStubs).toHaveLength(1);
  });
});
