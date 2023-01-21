import PageAddress from "../../pages/address/address.cy";

const pageAddress = new PageAddress();

describe("Pruebas App Autoconversion", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("Verificacion de visual de Dirección", () => {
        pageAddress.ValidateVisualAddAddress();
    });

    it("Verificacion al no agregar los campos", () => {
        pageAddress.noWritteAddress();
    });
});
