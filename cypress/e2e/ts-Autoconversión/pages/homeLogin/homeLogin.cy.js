import PageHome from "../../pages/home/home.cy";
import PageLogin from "../../pages/login/login.cy";

const pageHome = new PageHome();
const pageLogin = new PageLogin();

const requiredHomeLoginData = require("../../fixtures/homeLogin/homeLoginData.json");

class PageHomeLogin {
  VerifyVisualHomeLogin() {
    this.preTestingHomeLogin();
    this.verifyCopies("h2", requiredHomeLoginData.Titulo[0]);
    this.verifyCopies("h2", requiredHomeLoginData.Titulo[1]);
    this.verifyCopies("p", requiredHomeLoginData.descripcion[0]);
    this.verifyCopies(
      ".css-vzm9os-MuiStack-root > .MuiTypography-root",
      requiredHomeLoginData.labels[0]
    );
    this.verifyCopies("h2", requiredHomeLoginData.Titulo[2]);
    this.verifyCopies("h2", requiredHomeLoginData.Titulo[3]);
    this.verifyCopies("h2", requiredHomeLoginData.Titulo[4]);
    this.verifyCopies("p", requiredHomeLoginData.descripcion[1]);
    this.verifyCopies(
      ".css-nen11g-MuiStack-root > .MuiTypography-buttonSmall",
      requiredHomeLoginData.labels[1]
    );
    this.verifyCopies("h3", requiredHomeLoginData.Titulo[5]);
    this.verifyCopies("p", requiredHomeLoginData.descripcion[2]);
    this.verifyCopies("button", requiredHomeLoginData.buttonContactExecutive);
    this.verifyCopyright();
  }

  preTestingHomeLogin() {
    pageHome.clickButtonLead();
    pageLogin.Login();
  }

  verifyImg(linkImagen) {
    cy.get("img").should("have.attr", "src", `${linkImagen}`);
  }

  verifyCopies(etiqueta, copy) {
    cy.contains(`${etiqueta}`, `${copy}`).should("be.visible");
  }

  verifyCopyright() {
    cy.contains("span", requiredHomeLoginData.Copyright.copy).should(
      "be.visible"
    );
  }

  buttonKitHome(kit) {
    cy.get(
      `:nth-child(${kit}) > .MuiPaper-root > .MuiCardContent-root > .css-b55nah-MuiStack-root > .MuiButtonBase-root`
    ).click();
    cy.wait(7000);
  }
}

export default PageHomeLogin;