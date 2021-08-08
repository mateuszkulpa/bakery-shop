import { mount } from "@cypress/vue";
import CartTable from "@/components/organisms/CartTable.vue";
import { getSingleProductMock } from "../mocks/products";
import CartItem from "@/types/cartItem";
import "@/styles/index.css";

describe("HelloWorld", () => {
  it("renders a ProductCard with all properties", () => {
    cy.viewport(1200, 700);

    const cartItems: CartItem[] = [
      {
        id: "1",
        product: getSingleProductMock(),
        weight: 2,
        remarks: "lorem ipsum",
      },
    ];

    mount(CartTable, {
      props: {
        cartItems: cartItems,
      },
    });

    cy.get("[data-test-id='cart-item-row']").should("have.length", 1);
    cy.contains(getSingleProductMock().name);
    cy.contains("lorem ipsum");
    cy.contains("2 KG");
  });
});
