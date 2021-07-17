import Checkout from "@/components/templates/Checkout.vue";
import { shallowMount } from "@vue/test-utils";

let mockRouterPushFn = jest.fn();

jest.mock("vue-router", () => {
  return {
    useRouter: () => ({ push: mockRouterPushFn }),
  };
});

describe("Checkout.vue", () => {
  it("displays a cart table with checkout form", () => {
    const wrapper = shallowMount(Checkout, {
      props: {
        cartItems: [],
      },
    });

    expect(wrapper.find("cart-table-stub").exists()).toBe(true);
    expect(wrapper.find("checkout-form-stub").exists()).toBe(true);
  });

  it("natigates to thank you page after order sent", () => {
    const wrapper = shallowMount(Checkout, {
      props: {
        cartItems: [],
      },
    });

    (wrapper.vm as typeof Checkout & { onOrderSent: () => {} }).onOrderSent();

    expect(mockRouterPushFn).toBeCalledWith({name: 'ThankYou'});
  });
});
