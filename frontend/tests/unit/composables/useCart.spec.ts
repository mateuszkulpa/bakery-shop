import useCart from "@/composables/useCart";
import Product from "@/types/product";
import ProductImage from "@/types/productImage";
import { unref } from "vue";

const getProductImageMock = (): ProductImage => ({
  id: "string",
  name: "",
  alternativeText: "",
  caption: "",
  width: 500,
  height: 500,
  formats: {},
  hash: "",
  ext: "",
  mime: "",
  size: 10000,
  url: "",
  previewUrl: "",
  provider: "",
  provider_metadata: {},
  related: "",
  created_by: "",
  updated_by: "",
});

const getProductMock = (): Product => ({
  id: 1,
  slug: "slug",
  name: "name",
  description: "lorem ipsum",
  categories: [],
  coverImage: getProductImageMock(),
  images: [getProductImageMock()],
  pricePerKg: 50,
  minKg: 1,
  maxKg: 5,
});

describe("useCart.ts", () => {
  it("adds to cart product correctly", async () => {
    const cart = useCart();

    cart.addToCart(getProductMock(), 4, "--");

    expect(unref(cart.cartItems).length).toEqual(1);
  });

  it("removes added cart item correctly", async () => {
    const cart = useCart();

    cart.addToCart(getProductMock(), 4, "--");
    const [cartItem] = unref(cart.cartItems);
    cart.removeFromCart(cartItem);

    expect(unref(cart.cartItems).length).toEqual(0);
  });

  it("calculates count of cart items correctly", async () => {
    const cart = useCart();

    cart.addToCart(getProductMock(), 4, "--");
    cart.addToCart(getProductMock(), 4, "--");
    cart.addToCart(getProductMock(), 4, "--");
  
    expect(unref(cart.cartItemsCount)).toEqual(3);
  });


  afterEach(() => {
    useCart().clearCart();
  });
});
