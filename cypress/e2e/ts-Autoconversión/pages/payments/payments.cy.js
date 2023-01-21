import PageHome from "../../pages/home/home.cy";
import PageLogin from "../../pages/login/login.cy";
import PageCart from "../../pages/cart/cart.cy";
import PageAddress from "../../pages/address/address.cy";

import PageHomeLogin from "../../pages/homeLogin/homeLogin.cy";
import PageRegister from "../../pages/registro/registro.cy";

const pageHome = new PageHome();
const pageLogin = new PageLogin();
const pageCart = new PageCart();
const pageAddress = new PageAddress();



const pageHomeLogin = new PageHomeLogin();
const pageRegister = new PageRegister();


const requiredPaymentsData = require('../../fixtures/payments/paymentsData.json')

class PagePayments {

    ValidateVisualPayments(){
        this.preTestingPaymentsMetods();
        this.ValidateTitleModalPayments();
        this.ValidateSubtitleModalPayments();
        this.ValidateDescriptionModalPayments();
        this.ValidateImgPaymentsVisa();
        this.ValidateImgPaymentsDiners();
        this.ValidateImgPaymentsMarterCard();
        this.ValidateImgPaymentsAmericanExpress();

        this.validateTypes("numberCard",1);
        this.validateTypes("name",1);
        this.validateTypes("dateExpire",1);
        this.validateTypes("csc",1);

        this.ValidateCopiesPayments('button', requiredPaymentsData.buttonContinue)
        this.ValidateCopiesPayments('button', requiredPaymentsData.buttonBack)

        this.ValidateCopiesPayments('span', requiredPaymentsData.Copyright);
    }

    ValidateAlertsPayments(){
        this.preTestingPaymentsMetods();
        this.validateTypes("numberCard",3 );
        this.validateTypes("name",3);
        this.validateTypes("dateExpire",3 );
        this.validateTypes("csc",3 );
        this.validateTypes("numberCard",3 );
        this.ValidateCopiesPayments('p', requiredPaymentsData.alertNumCreditCard);
        this.ValidateCopiesPayments('p', requiredPaymentsData.alertName);
        this.ValidateCopiesPayments('p', requiredPaymentsData.alertDate);
        this.ValidateCopiesPayments('p', requiredPaymentsData.alertCode);
    }

    addCreditCardPayments(flag){
        this.preTestingPaymentsMetods();
        
        flag = (typeof flag !== 'undefined') ?  flag : 1;
        if (flag==2) {
            this.validateTypes("numberCard" ,2 , requiredPaymentsData.tc.numFailed);
        } else {
            this.validateTypes("numberCard" ,2 , requiredPaymentsData.tc.numOk);
        }
        this.validateTypes("name" ,2 , requiredPaymentsData.tc.name);
        this.validateTypes("dateExpire" ,2 , requiredPaymentsData.tc.date);
        this.validateTypes("csc" ,2 , requiredPaymentsData.tc.cvv);
        this.clickButtonPaymentsContinue();
    }

    validateTypes(component,type,copy,){
        if (type==1) {
            cy.get( `[name=${component}]`).should('be.visible');
        } else if (type==2) {
            cy.get( `[name=${component}]`).type(copy);
        } else if (type==3) {
            cy.get( `[name=${component}]`).should('be.visible').click();
        }
    }

    ValidateCopiesPayments(etiqueta,copy){
        cy.contains(`${etiqueta}`,`${copy}`)
        .should('be.visible');
    }

    ValidateImgPaymentsVisa(){
        const imgPayments = '[style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 31.86px; height: 17.73px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img';
        const imgLink = '/_next/image?url=%2Fassets%2Fimages%2Fvisa.png&w=64&q=75';
        cy.get(`${imgPayments}`).should('have.attr', 'src', `${imgLink}`);
    }

    ValidateImgPaymentsDiners(){
        const imgPayments = '[style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 38.23px; height: 21.33px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img';
        const imgLink = '/_next/image?url=%2Fassets%2Fimages%2Fdinners.png&w=96&q=75';
        cy.get(`${imgPayments}`).should('have.attr', 'src', `${imgLink}`);
    }

    ValidateImgPaymentsMarterCard(){
        const imgPayments = '[style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 25.48px; height: 19.67px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img';
        const imgLink = '/_next/image?url=%2Fassets%2Fimages%2Fmastercard.png&w=64&q=75';
        cy.get(`${imgPayments}`).should('have.attr', 'src', `${imgLink}`);
    }

    ValidateImgPaymentsAmericanExpress(){
        const imgPayments = '[style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 24.45px; height: 23.55px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img';
        const imgLink = '/_next/image?url=%2Fassets%2Fimages%2Famerican.png&w=64&q=75';
        cy.get(`${imgPayments}`).should('have.attr', 'src', `${imgLink}`);
    }

    preTestingPaymentsMetods(){
        pageHome.clickButtonLead();
        pageLogin.Login();
        pageCart.AddProductsCartForOtherTest();
        pageCart.clickButtonPay();
        pageAddress.writteAddressOtherTest();
        cy.wait(4000);
    }

    ValidateTitleModalPayments(){    
        cy.get('.css-m69qwo-MuiStack-root > .MuiTypography-root').scrollIntoView().should('be.visible').should('have.text', requiredPaymentsData.title);
    }

    ValidateSubtitleModalPayments(){    
        cy.get('.css-i3pbo > .MuiTypography-h3').scrollIntoView().should('be.visible').should('have.text', requiredPaymentsData.subtitle);
    }

    ValidateDescriptionModalPayments(){    
        cy.get('.css-qhu8sf > .MuiTypography-root').scrollIntoView().should('be.visible').should('have.text', requiredPaymentsData.description);
    }

    clickButtonPaymentsContinue(){
        cy.contains('button', requiredPaymentsData.buttonContinue).click();
    }

    clickButtonPaymentsBack(){
        cy.contains('button', requiredPaymentsData.buttonBack).click();
    }
}

export default PagePayments