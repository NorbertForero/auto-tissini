import PageHome from "../home/home.cy";
import PageLogin from "../login/login.cy";
import PageCart from "../cart/cart.cy";

//PegesRequieres
const pageHome = new PageHome();
const pageLogin = new PageLogin();
const pageCart = new PageCart();


//ArchivesJsonRequieres
const requiredAddressData = require('../../fixtures/address/addressData.json')

class PageAddress {

    ValidateVisualAddAddress(){
        this.preTestingAddress();
        this.buttonIconBack();
        this.titlePayOrder();
        this.ValidateStatusBarAddress();
        this.titleAddressSend();
        this.ValidateAllTypesAddress();
        this.buttonAddresContinueType();
        this.buttonAddresBackType();
        this.validateCopyRight();
    }

    ValidateAllTypesAddress(){
        this.addressType();
        this.addresComplementType();
        this.addresMobilePhoneType();
        this.addresZipCodeType();
        this.addresStateType();
        this.addresCityType();
    }

    ValidateStatusBarAddress(num, color){
        this.statusBar(1,'76, 175, 80');
        this.statusBar(2,"214, 214, 214");
        this.statusBar(3,"214, 214, 214");
    }

    ValidateLabelsAddress(etiqueta,copy){
        cy.contains(`${etiqueta}`,`${copy}`)
        .should('be.visible');
    }

    AddAddress(){
        this.preTestingAddress();
        this.writteAddressOtherTest();
    }

    preTestingAddress(){
        pageHome.clickButtonLead();
        pageLogin.Login();
        pageCart.AddProductsCartForOtherTest();
        pageCart.clickButtonPay();
    }

    writteAddressOtherTest(){
        this.writteAddress('address', requiredAddressData.visual.address.address );
        this.writteAddress('address_2', requiredAddressData.visual.address.address_2);
        this.writteAddress('phone', requiredAddressData.visual.address.phone);
        this.writteAddress('zipcode', requiredAddressData.visual.address.zipcode);
        cy.wait(2000)
        this.clickButtonAddresContinueType();
    }

    noWritteAddress(){
        this.preTestingAddress();
        cy.wait(2000)
        this.clickButtonAddresContinueType();
        this.ValidateLabelsAddress('p', requiredAddressData.visual.alertsAddress);
        this.ValidateLabelsAddress('p', requiredAddressData.visual.alertsMobilPhone);
        this.ValidateLabelsAddress('p', requiredAddressData.visual.alertsPostalCode);
    }

    writteAddress(component, text){
        cy.get(`[name=${component}]`).type(`${text}`);
    }

    buttonIconBack(){
        cy.get('.css-m69qwo-MuiStack-root > .MuiButtonBase-root > .material-icons').should('be.visible');
    }

    titlePayOrder(){
        this.ValidateLabelsAddress('h2', requiredAddressData.visual.Title);
    }

    validateCopyRight(){
        this.ValidateLabelsAddress('span', requiredAddressData.visual.Copyright);
    }

    statusBar(num, color){
        cy.get(`:nth-child(${num}) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .MuiBox-root > .StepIcon-box`).should('be.visible').should('have.css','color',`rgb(${color})`);
    }

    titleAddressSend(){
        this.ValidateLabelsAddress('h3', requiredAddressData.visual.Subtitle);
    }

    addressType(){
        cy.get('[name=address]').should('be.visible');
    }

    addresComplementType(){
        cy.get('[name=address_2]').should('be.visible');
    }

    addresMobilePhoneType(){
        cy.get('[name=phone]').should('be.visible');
    }

    addresZipCodeType(){
        cy.get('[name=zipcode]').should('be.visible');
    }

    addresStateType(){
        cy.get('[name=state]').should('be.visible');
    }

    addresCityType(){
        cy.get('[name=city]').should('be.visible');
    }

    buttonAddresContinueType(){
        cy.contains('button',requiredAddressData.visual.ButtonContinue).should('be.visible');
    }

    buttonAddresBackType(){
        cy.contains('button',requiredAddressData.visual.ButtonBack).should('be.visible');
    }

    clickButtonAddresContinueType(){
        cy.contains('button',requiredAddressData.visual.ButtonContinue).click();
    }

    clickButtonAddresBackType(){
        cy.contains('button',requiredAddressData.visual.ButtonBack).click();
    }
}

export default PageAddress