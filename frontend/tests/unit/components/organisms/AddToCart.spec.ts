import { mount } from "@vue/test-utils";
import AddToCart from "@/components/organisms/AddToCart.vue";
import { getSingleProductMock } from "../../../mocks/products";

let mockAddToCartFn = jest.fn();
let mockRouterPushFn = jest.fn();

jest.mock("@/composables/useCart", () => {
  return () => ({
    addToCart: mockAddToCartFn,
  });
});

jest.mock("vue-router", () => {
  return {
    useRouter: () => ({ push: mockRouterPushFn }),
  };
});

beforeEach(() => {
  mockAddToCartFn = jest.fn();
  mockRouterPushFn = jest.fn();
});

describe("CartItemRow.vue", () => {
  it("adds a cart and change route after form submission", async () => {
    const product = getSingleProductMock();
    const wrapper = mount(AddToCart, {
      props: {
        product,
      },
    });

    const form = wrapper.find("form");
    const weightSelect = form.find<HTMLSelectElement>("#weight");
    const remarksTextarea = form.find<HTMLTextAreaElement>("#remarks");

    await weightSelect.setValue(1);
    await remarksTextarea.setValue("Lorem ipsum");
    await form.trigger("submit");

    expect(mockAddToCartFn).toBeCalled();
    expect(mockRouterPushFn).toBeCalled();
  });
});
