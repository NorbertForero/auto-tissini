import PageHome from "../../pages/home/home.cy";
import PageHomeLogin from "../../pages/homeLogin/homeLogin.cy";
import PageLogin from "../../pages/login/login.cy";
import PageCart from "../../pages/cart/cart.cy";
import PagePayments from "../../pages/payments/payments.cy";

const pageHome = new PageHome();
const pageHomeLogin = new PageHomeLogin();
const pageLogin = new PageLogin();
const pageCart = new PageCart();
const pagePayments = new PagePayments();


describe("Pruebas Pagos", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Verificacion de Visual Metodos de pago", () => {
        pagePayments.ValidateVisualPayments();
    });

    it("Verificacion al agregar todos los datos de la TC", () => {
        pagePayments.addCreditCardPayments();
    });

    it("Verificacion al no agregar los datos de la TC", () => {
        pagePayments.ValidateAlertsPayments();
    });
});
