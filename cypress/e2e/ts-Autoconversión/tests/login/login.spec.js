import PageLogin from '../../pages/login/login.cy'
import PageOnboarding from '../../pages/login/Onboarding.cy'

const pageLogin = new PageLogin();
const pageOnboarding = new PageOnboarding();

describe('Login', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    })

    it('Verificacion Visual PhoneNumber', () => {
      pageLogin.VerifyVisualPhoneNumber();
    })

    it('Verificacion alert al no agregar el PhoneNumber', () => {
      pageLogin.VerifyVisualNoAddPhoneNumber();
    })

    it('Verificacion alert al agregar el PhoneNumber menor a 10', () => {
      pageLogin.VerifyVisualMinorAddPhoneNumber();
    })

    it('Verificacion alert al agregar el PhoneNumber mayor a 10', () => {
      pageLogin.VerifyVisualElderlyAddPhoneNumber();
    })

    it('Verificacion Visual codigo SMS', () => {
      pageLogin.VerifyVisualCodeNumber();
    })

    it('Verificacion al no agregar el codigo SMS', () => {
      pageLogin.VerifyVisualNoCode();
    })

    it('Verificacion al agregar un codigo SMS no valido', () => {
      pageLogin.VerifyAlertNoValidCode();
    })

    it('Verificacion de boton regresar en todas las vistas', () => {
      pageLogin.VerifyButtonBackAllViews();
    })

    it('Verificacion Onboarding', () => {
      pageLogin.preTestingLoginOnbiarding();
      pageOnboarding.ValidateVisualOnboarding();
    })
    
    it('Verificacion reenvio de codigo SMS', () => {
      pageLogin.VerifyResendCode();
    })

    afterEach(() => {

    });
})