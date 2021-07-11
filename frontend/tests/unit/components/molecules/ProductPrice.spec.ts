import { shallowMount } from "@vue/test-utils";
import ProductPrice from "@/components/molecules/ProductPrice.vue";

describe("ProductPrice.vue", () => {
  it("shows a proper calculated price", () => {
    const wrapper = shallowMount(ProductPrice, {
      props: {
        weight: 4,
        pricePerKg: 50,
      },
    });

    expect(wrapper.find("[data-test-id='price']").text()).toMatch("200 PLN");
    expect(wrapper.find("[data-test-id='price-per-kg']").text()).toMatch(
      "Cena za kg: 50 PLN"
    );
  });
});
