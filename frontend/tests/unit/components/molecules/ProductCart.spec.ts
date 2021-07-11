import { mount, shallowMount } from "@vue/test-utils";
import ProductCard from "@/components/molecules/ProductCard.vue";
import { getSingleProductMock } from "../../../mocks/products";
import { RouterLink } from "../../stubs";

const productMock = getSingleProductMock();
const mountProductCard = () =>
  mount(ProductCard, {
    props: {
      product: productMock,
    },
    global: {
      stubs: { RouterLink },
    },
  });

describe("ProductCard.vue", () => {
  it("renders a list with categories", async () => {
    const wrapper = mountProductCard();

    const categories = wrapper.findAll("[data-test-id='product-category']");

    expect(categories.length).toBe(productMock.categories.length);
  });

  it("displays a product title based on product name", async () => {
    const wrapper = mountProductCard();

    const title = wrapper.find("[data-test-id='product-title']");

    expect(title.exists()).toBe(true);
    expect(title.text()).toMatch(productMock.name);
  });

  it("displays a product price", async () => {
    const wrapper = mountProductCard();

    const price = wrapper.find("[data-test-id='product-price']");

    expect(price.exists()).toBe(true);
    expect(price.text()).toMatch(`${productMock.pricePerKg} PLN`);
  });
});
