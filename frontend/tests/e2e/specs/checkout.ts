import {
  getFeaturedProductsMock,
  getProductsMock,
  getSingleProductMock,
} from "../../mocks/products";

/* INTERCEPTORS */
function interceptFeaturedProducts() {
  cy.intercept("/cakes?featured=true", (req) => {
    req.reply({
      body: getFeaturedProductsMock(),
    });
  });
}

function interceptProducts() {
  cy.intercept("/cakes", (req) => {
    req.reply({
      body: getProductsMock(),
    });
  });
}

function interceptProduct() {
  cy.intercept("/cakes/*", (req) => {
    req.reply({
      body: getSingleProductMock(),
    });
  });
}

function interceptPlaceOrder() {
  cy.intercept("/orders/place-order", (req) => {
    req.reply({});
  });
}

/* ACTIONS */
function goToHomePage() {
  cy.visit("/");
}

function goToProductsPage() {
  cy.visit("/products");
}

function goToProductPage() {
  cy.get("[data-test-id='product-card']").first().click();
}

function addToCart() {
  cy.get("#weight").select("3");
  cy.get("#remarks").type("Test remarks");
  cy.get("form").submit();
}

function goToCheckout() {
  cy.visit("/checkout");
}

function fillInCheckoutForm() {
  cy.get("#client-name").type("Jan Kowalski");
  cy.get("#client-phone-number").type("+48 123 456 789");
  cy.get("#client-address").type("Opole, Opolska 1");
  cy.get("form").submit();
}

/* ASSERTIONS */
function assertFeaturedProducts() {
  cy.get("[data-test-id='popular-products']")
    .children()
    .should("have.length", 3);
}

function assertCartItems() {
  cy.get("[data-test-id='cart-item-row']").should("have.length", 1);
}

function assertOrderPlaced() {
  cy.contains("Twoje zamówienie zostało poprawnie złożone!");
}

describe("Checkout process tests", () => {
  it("Place a order process", () => {
    interceptFeaturedProducts();
    interceptProducts();
    interceptProduct();
    interceptPlaceOrder();

    goToHomePage();
    assertFeaturedProducts();

    goToProductsPage();

    goToProductPage();
    addToCart();
    assertCartItems();

    goToCheckout();
    fillInCheckoutForm();
    assertOrderPlaced();
  });
});
