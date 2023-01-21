
const requiredRegistroData = require('../../fixtures/registro/registroData.json')

class PageRegister {

  registerUser(){
    this.addName(requiredRegistroData.user.name);
    this.addLastname(requiredRegistroData.user.lastname);
    this.addEmail(requiredRegistroData.user.email);
    this.checkBoxRegister();
    this.buttonRegister();
  }

  buttonRegister() {
    cy.contains("button", "Registrarme").click();
  }

  addName(name) {
    cy.wait(1000);
    cy.get('[name="name"]').type(name);
  }

  addLastname(lastname) {
    cy.get('[name="lastname"]').type(lastname);
  }

  addEmail(email) {
    cy.get('[name="email"]').type(email);
  }

  checkBoxRegister() {
    cy.get('[name="policies"]').check();
  }

  deleteUserTestApi(phoneUser) {
    cy.request({
      method: "DELETE",
      url: `http://localhost:3001/api/userCel/${phoneUser}`,
    });
  }

  queryUserTestApi(phoneUser) {
    cy.request({
      method: "GET",
      url: `http://localhost:3001/api/user/${phoneUser}`,
    });
  }

  validateUserExist(phoneUser) {
    cy.request({
      method: "GET",
      url: `http://localhost:3001/api/user/${phoneUser}`,
    }).then((res) => {
      if (res.status === 200) {
        cy.request({
          method: "DELETE",
          url: `http://localhost:3001/api/userCel/${phoneUser}`,
        });
      } else {
        cy.log("El usuario no existe, podemos registrar el usuario");
      }
    });
  }
}

export default PageRegister;