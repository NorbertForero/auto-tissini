import PageOrderDetails from "../../pages/orderDetails/orderDetails.cy";

const pageOrderDetails = new PageOrderDetails();


describe("Pruebas detalles de la orden", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Verificacion de Visual Metodos de pago", () => {
        pageOrderDetails.ValidateVisualOrderDetails();
    });

    it("Verificacion de Transaccion exitosa al realizar pago", () => {
        pageOrderDetails.ValidateVisualTransactionOk();
    });

    it("Verificacion de Transaccion fallida al realizar pago", () => {
        pageOrderDetails.ValidateVisualTransactionFailed();
    });

    it("Verificacion de loader al realizar pago", () => {
        pageOrderDetails.ValidateLoader();
    });

    afterEach(() => {

    });
});
