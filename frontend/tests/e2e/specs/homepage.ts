import { getFeaturedProdcutsMock } from "../../mocks/products";

describe("Homepage Tests", () => {
  it("Shows a list of popular products", () => {
    cy.intercept("/cakes?featured=true", (req) => {
      req.reply({
        body: getFeaturedProdcutsMock(),
        delay: 250,
      });
    });

    cy.visit("/");
    cy.get("[data-cy='popular-products']").children().should("have.length", 3);
  });
});
