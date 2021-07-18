import Product from "@/components/templates/Product.vue";
import { shallowMount } from "@vue/test-utils";
import { getSingleProductMock } from "../../../mocks/products";

describe("Product.vue", () => {
  it("displays a details of product", () => {
    const product = getSingleProductMock();
    const wrapper = shallowMount(Product, {
      props: {
        product,
      },
    });

    expect(wrapper.find("[data-test-id='product-name']").text()).toMatch(
      product.name
    );

    expect(
      wrapper.find("[data-test-id='product-description']").exists()
    ).toBeTruthy();

    expect(
      wrapper.find("[ data-test-id='product-main-image']").exists()
    ).toBeTruthy();

    expect(
      wrapper.findAll("[ data-test-id='product-additional-image']")
    ).toHaveLength(product.images.length);
  });
});
