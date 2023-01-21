
import PageCart from "../../pages/cart/cart.cy";

const pageCart = new PageCart();

describe("Pruebas App Autoconversion", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Verificacion de modal ir al carrito.", () => {
    pageCart.ValidateModalGoCart();
  });

  it("Verificacion de los productos agregados al carrito.", () => {
    pageCart.ValidateVisualCart();
  });

  afterEach(() => {

  });

});
