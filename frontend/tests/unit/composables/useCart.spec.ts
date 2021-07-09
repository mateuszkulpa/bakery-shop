import useCart from "@/composables/useCart";
import { unref } from "vue";
import { getSingleProductMock } from "../../mocks/products";

describe("useCart.ts", () => {
  it("adds to cart product correctly", async () => {
    const cart = useCart();

    cart.addToCart(getSingleProductMock(), 4, "--");

    expect(unref(cart.cartItems).length).toEqual(1);
  });

  it("removes added cart item correctly", async () => {
    const cart = useCart();

    cart.addToCart(getSingleProductMock(), 4, "--");
    const [cartItem] = unref(cart.cartItems);
    cart.removeFromCart(cartItem);

    expect(unref(cart.cartItems).length).toEqual(0);
  });

  it("calculates count of cart items correctly", async () => {
    const cart = useCart();

    cart.addToCart(getSingleProductMock(), 4, "--");
    cart.addToCart(getSingleProductMock(), 4, "--");
    cart.addToCart(getSingleProductMock(), 4, "--");
  
    expect(unref(cart.cartItemsCount)).toEqual(3);
  });


  afterEach(() => {
    useCart().clearCart();
  });
});
