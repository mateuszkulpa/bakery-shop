import Products from "@/components/templates/Products.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { getSingleProductMock } from "../../../mocks/products";

describe("Products.vue", () => {
  it("displays a title of section", () => {
    const wrapper = mount(Products, {
      props: {
        products: [],
      },
    });

    const sectionTitle = wrapper.find("[data-test-id='products-title']");

    expect(sectionTitle.text()).toMatch("Zamów torty z dowozem");
  });

  it("renders a 3 prodcuts in list", () => {
    const wrapper = shallowMount(Products, {
      props: {
        products: [
          getSingleProductMock(1),
          getSingleProductMock(2),
          getSingleProductMock(3),
        ],
      },
    });

    const productCards = wrapper.findAll("product-card-stub");

    expect(productCards).toHaveLength(3);
  });
});
