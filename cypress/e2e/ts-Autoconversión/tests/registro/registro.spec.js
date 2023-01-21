import PageHome from '../../pages/home/home.cy'
import PageLogin from '../../pages/login/login.cy'
import PageRegister from '../../pages/registro/registro.cy'

const pageHome = new PageHome();
const pageLogin = new PageLogin();
const pageRegister = new PageRegister();
const requiredRegistroData = require('../../fixtures/registro/registroData.json');

describe('Login', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('Verificacion Registro Correcto', () => {
      pageHome.clickButtonLead();
      pageRegister.validateUserExist(requiredRegistroData.user.phoneNumber);
      pageLogin.LoginForRegister(requiredRegistroData.user.phoneNumber);
      pageRegister.registerUser();
    })

    afterEach(() => {
      
    });
})