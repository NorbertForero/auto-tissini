import PageHomeLogin from '../../pages/homeLogin/homeLogin.cy'

const pageHomeLogin = new PageHomeLogin();

describe('Pruebas App Autoconversion', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('Verificacion del Home Login', () => {
      pageHomeLogin.VerifyVisualHomeLogin();
    })

    afterEach(() => {

    })
})