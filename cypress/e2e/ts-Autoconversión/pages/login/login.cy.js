import PageHome from '../../pages/home/home.cy'
import PageRegister from "../../pages/registro/registro.cy";
import PageOnboarding from "../../pages/login/Onboarding.cy";

const pageHome = new PageHome();
const pageRegister = new PageRegister();
const pageOnboarding = new PageOnboarding();

const requiredLoginData = require('../../fixtures/login/loginData.json')

class PageLogin {

    VerifyCopiesCardView(){
        this.verifyCopies();
        this.verifyLogo();
    }

    VerifyVisualPhoneNumber(){
        this.preTestingLogin();
        this.verifyLogo(requiredLoginData.Logo.src);
        this.verifyCopies('h2', requiredLoginData.ModalPhoneNumber.Titulo);
        this.verifyCopies('span', requiredLoginData.ModalPhoneNumber.Descripcion);
        this.verifyCopies('label', requiredLoginData.ModalPhoneNumber.input);
        this.verifyCopies('Button', requiredLoginData.ModalPhoneNumber.BotonContinuar);
        this.verifyCopies('Button', requiredLoginData.ModalPhoneNumber.BotonRegresar);
    }

    VerifyVisualNoAddPhoneNumber(){
        this.preTestingLogin();
        this.buttonContinuar();
        this.buttonContinuar();
        this.alertNoPhoneNumber(requiredLoginData.alerts[1]);
    }

    VerifyVisualElderlyAddPhoneNumber(){
        this.preTestingLogin();
        this.buttonContinuar();
        this.addPhoneNumber(31546578976548797);
        this.alertNoPhoneNumber(requiredLoginData.alerts[2]);
    }

    VerifyVisualMinorAddPhoneNumber(){
        this.preTestingLogin();
        this.addPhoneNumber(34054877)
        this.alertNoPhoneNumber(requiredLoginData.alerts[3]);
    }

    VerifyVisualCodeNumber(){
        this.preTestingLogin();
        this.addPhoneNumber(requiredLoginData.user.phoneNumber);
        this.buttonContinuar();
        this.verifyLogo(requiredLoginData.Logo.src);
        this.verifyCopies('h2', requiredLoginData.CodePhoneNumber.Titulo);
        this.verifyCopies('span', requiredLoginData.CodePhoneNumber.Descripcion);
        this.validateCodes(1);
        this.validateCodes(2);
        this.validateCodes(3);3107531185
        this.validateCodes(4);
        this.verifyCopies('p', requiredLoginData.CodePhoneNumber.label);
        this.verifyCopies('p', requiredLoginData.CodePhoneNumber.labelUrl);
        this.verifyCopies('Button', requiredLoginData.CodePhoneNumber.BotonContinuar);
        this.verifyCopies('Button', requiredLoginData.CodePhoneNumber.BotonRegresar);
        this.validateCodes(1);
    }

    VerifyVisualNoCode() {
        this.preTestingLogin();
        this.addPhoneNumber(requiredLoginData.user.phoneNumber)
        this.buttonContinuar();
        this.addOneCodeLogin(requiredLoginData.user.Code1);
        this.buttonContinuar();
        this.alertNoCode(requiredLoginData.alerts[0]);
    }

    VerifyAlertNoValidCode() {
        this.preTestingLogin();
        this.addPhoneNumber(3588784564)
        this.buttonContinuar();
        this.addCodeLogin(requiredLoginData.user.Code1,requiredLoginData.user.Code2,requiredLoginData.user.Code3,requiredLoginData.user.Code4);
        this.buttonContinuar();
        this.AlertNoValidCode();
    }

    VerifyButtonBackAllViews(){
        this.preTestingLogin();
        this.buttonRegresar();
        pageHome.clickButtonLead();
        this.addPhoneNumber(3108854472);
        this.buttonContinuar();
        this.addCodeLogin(1,2,3,4);
        this.buttonRegresar();
        this.buttonRegresar();
        pageHome.VerifyVisualHome();
    }

    VerifyResendCode(){
        this.preTestingLogin();
        this.addPhoneNumber(3107531185);
        this.buttonContinuar();
        this.labelResendCodeValidate();
        this.labelResendCodeClick();
        this.labelResendCodeNoVisible();
        cy.wait(17000);
        this.labelResendCodeValidate();
    }

    AlertNoValidCode() {
        this.alertIconError();
        this.verifyCopies("p",requiredLoginData.alertError.title);
        this.verifyCopies("p",requiredLoginData.alertError.descripcion);
        this.alertCloseModalError();
        this.alertCloseModalErrorClick();
    }

    Login(numCel){
        numCel = (typeof numCel !== 'undefined') ?  numCel : 7865470212;
        pageRegister.validateUserExist(numCel);
        this.addPhoneNumber(numCel)
        this.buttonContinuar();
        this.addCodeLogin(requiredLoginData.user.Code1,requiredLoginData.user.Code2,requiredLoginData.user.Code3,requiredLoginData.user.Code4);
        this.buttonContinuar();
        pageRegister.registerUser();
        cy.wait(5000);
        pageOnboarding.buttonNextOnboarding();
        pageOnboarding.buttonNextOnboarding();
        pageOnboarding.buttonNextOnboarding();
        pageOnboarding.buttonFinishOnboarding();
        pageOnboarding.buttonCloseVideoOnboarding();
    }

    LoginForRegister(numCel){
        numCel = (typeof numCel !== 'undefined') ?  numCel : 7865470212;
        pageRegister.validateUserExist(numCel);
        this.addPhoneNumber(numCel)
        this.buttonContinuar();
        this.addCodeLogin(requiredLoginData.user.Code1,requiredLoginData.user.Code2,requiredLoginData.user.Code3,requiredLoginData.user.Code4);
        this.buttonContinuar();
        pageRegister.registerUser();
        cy.wait(2000);
    }

    preTestingLogin(){
        pageHome.clickButtonLead();
    }

    preTestingLoginOnbiarding(){
        pageHome.clickButtonLead();
        this.LoginForRegister();
    }

    verifyLogo(linkImagen){
        cy.get('img').should('have.attr','src',`${linkImagen}`);
    }

    verifyCopies(etiqueta,copy){
        cy.contains(`${etiqueta}`,`${copy}`)
        .should('be.visible');
    }

    addPhoneNumber(phoneNumber){
        cy.get('[name="mobilephone"]').type(phoneNumber);
    }    

    addCodeLogin(num1,num2,num3,num4){
        cy.get('[name=code1]').type(num1);
        cy.get('[name=code2]').type(num2);
        cy.get('[name=code3]').type(num3);
        cy.get('[name=code4]').type(num4);
    }

    addOneCodeLogin(num){
        cy.get('[name=code1]').type(num);
    }

    validateCodes(num){
        cy.get(`[name=code${num}]`).should('be.visible');
    }

    buttonRegresar() {
        cy.contains("button", "Regresar").click();
    }

    buttonContinuar() {
        cy.contains("button", "Continuar").click();
    }

    //Alerts
    alertNoCode(noCode) {
        cy.contains("span", noCode).should("be.visible");
    }

    alertNoPhoneNumber(noPhoneNumber) {
        cy.contains("span", noPhoneNumber).should("be.visible");
    }

    alertIconError() {
        cy.get('.material-icons').should('be.visible');
    }

    alertCloseModalError() {
        cy.get('.MuiAlert-action > .MuiButtonBase-root').should('be.visible');
    }

    alertCloseModalErrorClick() {
        cy.get('.MuiAlert-action > .MuiButtonBase-root').click();
    }

    //labelUrl
    labelResendCodeValidate() {
        cy.contains('p', requiredLoginData.CodePhoneNumber.labelUrl).should('be.visible');
    }

    labelResendCodeClick() {
        cy.contains('p', requiredLoginData.CodePhoneNumber.labelUrl).click();
    }
    
    labelResendCodeNoVisible() {
        cy.contains('p', requiredLoginData.CodePhoneNumber.labelUrl).should('not.exist');
    }
}

export default PageLogin