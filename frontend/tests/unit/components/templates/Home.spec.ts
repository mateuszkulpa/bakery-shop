import Home from "@/components/templates/Home.vue";
import { shallowMount } from "@vue/test-utils";
import { getFeaturedProductsMock } from "../../../mocks/products";

describe("Home.vue", () => {
  it("displays a list of featured products", () => {
    const wrapper = shallowMount(Home, {
      props: {
        featuredProducts: getFeaturedProductsMock(),
      },
    });

    expect(
      wrapper.findAll("[data-test-id='popular-products'] > *")
    ).toHaveLength(getFeaturedProductsMock().length);
  });
});
