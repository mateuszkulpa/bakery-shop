import { mount } from "@vue/test-utils";
import AppNavigation from "@/components/organisms/AppNavigation.vue";
import { RouterLink } from "../../stubs";

jest.mock("@/composables/useCart", () => {
  return () => ({
    cartItemsCount: 10,
  });
});

describe("AppNavigation.vue", () => {
  it("displays a 10 cart items count", async () => {
    const wrapper = mount(AppNavigation, {
      global: { stubs: { RouterLink } },
    });

    const cartItems = wrapper.find("[data-test-id='cart-items-count']");

    expect(cartItems.text()).toMatch("10");
  });

  it("displays a 3 router links", async () => {
    const wrapper = mount(AppNavigation, {
      global: { stubs: { RouterLink } },
    });

    const routerLinks = wrapper.findAll("a");

    expect(routerLinks).toHaveLength(3);
  });
});
