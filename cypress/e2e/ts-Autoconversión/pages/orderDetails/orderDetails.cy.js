import PagePayments from "../../pages/payments/payments.cy";

const pagePayments = new PagePayments();

const requiredOrderDetailsData = require('../../fixtures/orderDetails/orderDetailsData.json')
const requiredLoaderData = require('../../fixtures/orderDetails/loaderData.json')
const requiredTransactionOkData = require('../../fixtures/orderDetails/TransactionOkData.json')
const requiredTransactionFailedData = require('../../fixtures/orderDetails/TransactionFailedData.json')

class PageOrderDetails{

    ValidateVisualOrderDetails(){
        this.preTestingPaymentsMetods();
        this.validateTitleModalOrderDetails();
        this.ValidateCopiesOrderDetails('h2',requiredOrderDetailsData.page.title);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.description);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[0].title);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[0].description);
        this.ValidateOptionEdit(1,requiredOrderDetailsData.page.cardViews[0].option);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[1].title);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[1].description);
        this.ValidateOptionEdit(2,requiredOrderDetailsData.page.cardViews[1].option);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[1].products[0].name);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[1].products[0].price);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[1].products[1].name);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[1].products[1].price);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[1].products[2].name);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[1].products[2].price);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[2].title);
        this.ValidateImagenPaymentsOrderDetails('img',3,requiredOrderDetailsData.page.cardViews[2].imagenPaymentMetods);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[2].num);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.cardViews[2].date);
        this.ValidateOptionEdit(3,requiredOrderDetailsData.page.cardViews[2].option);
        this.ValidateCopiesOrderDetails('h3',requiredOrderDetailsData.page.costSummary.title);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.costSummary.subtotalCopy);
        this.ValidateCopiesOrderDetails('h2',requiredOrderDetailsData.page.costSummary.subtotal);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.costSummary.taxesCopy);
        this.ValidateCopiesOrderDetails('h2',requiredOrderDetailsData.page.costSummary.taxes);
        this.ValidateCopiesOrderDetails('p',requiredOrderDetailsData.page.costSummary.totalCopy);
        this.ValidateCopiesOrderDetails('h2',requiredOrderDetailsData.page.costSummary.total);
        this.validateButtonPay(requiredOrderDetailsData.page.buttonContinue);
        this.ValidateCopiesOrderDetails('button',requiredOrderDetailsData.page.buttonBack);
        this.ValidateCopiesOrderDetails('span',requiredOrderDetailsData.page.Copyright);
    }

    ValidateLoader(){
        this.MakePayment();
        this.ValidateCopiesOrderDetails('h2', requiredLoaderData.page.Title);
        this.ValidateCopiesOrderDetails('p', requiredLoaderData.page.description);
        this.ValidateCopiesOrderDetails('span',requiredLoaderData.page.Copyright);
    }

    ValidateVisualTransactionOk() {
        this.MakePayment();
        cy.wait(10000);
        this.ValidateImagenOrderDetails(0,requiredTransactionOkData.page.logoTissini);
        this.ValidateImagenOrderDetails(2,requiredTransactionOkData.page.checkOk);
        this.ValidateCopiesOrderDetails('h3', requiredTransactionOkData.page.titulo);
        this.ValidateCopiesOrderDetails('p', requiredTransactionOkData.page.subtitulo1);
        this.ValidateCopiesOrderDetails('span',requiredTransactionOkData.page.labelTransaction);
        this.ValidateCopiesOrderDetails('span',requiredTransactionOkData.page.labelReference);
        this.ValidateCopiesOrderDetails('span',requiredTransactionOkData.page.labelCode);
        this.ValidateCopiesOrderDetails('p',requiredTransactionOkData.page.labelTotalPrice);
        this.ValidateCopiesOrderDetails('p',requiredTransactionOkData.page.subtitulo2);
        this.ValidateCopiesOrderDetails('span',requiredTransactionOkData.page.labelNombre);
        this.ValidateCopiesOrderDetails('p',requiredTransactionOkData.page.nombre);
        this.ValidateCopiesOrderDetails('span',requiredTransactionOkData.page.labelApellido);
        this.ValidateCopiesOrderDetails('p',requiredTransactionOkData.page.apellido);
        this.ValidateCopiesOrderDetails('span',requiredTransactionOkData.page.labelTelefono);
        this.ValidateCopiesOrderDetails('p',requiredTransactionOkData.page.telefono);
        this.ValidateCopiesOrderDetails('button',requiredTransactionOkData.page.buttonBackTop);
        this.ValidateCopiesOrderDetails('span',requiredTransactionOkData.page.labelPrint);
        this.ValidateCopiesOrderDetails('span',requiredTransactionOkData.page.Copyright);
    }

    ValidateVisualTransactionFailed() {
        this.MakePayment(2);
        cy.wait(2000);
        this.ValidateImagenOrderDetails(0,requiredTransactionFailedData.page.logoTissini);
        this.ValidateImagenOrderDetails(2,requiredTransactionFailedData.page.checkFailed);
        this.ValidateCopiesOrderDetails('h3', requiredTransactionFailedData.page.titulo);
        this.ValidateCopiesOrderDetails('p', requiredTransactionFailedData.page.subtitulo1);
        this.ValidateCopiesOrderDetails('p',requiredTransactionFailedData.page.copyFailedTransaction);
        this.ValidateCopiesOrderDetails('p',requiredTransactionFailedData.page.subtitulo2);
        this.ValidateCopiesOrderDetails('span',requiredTransactionFailedData.page.labelNombre);
        this.ValidateCopiesOrderDetails('p',requiredTransactionFailedData.page.nombre);
        this.ValidateCopiesOrderDetails('span',requiredTransactionFailedData.page.labelApellido);
        this.ValidateCopiesOrderDetails('p',requiredTransactionFailedData.page.apellido);
        this.ValidateCopiesOrderDetails('span',requiredTransactionFailedData.page.labelTelefono);
        this.ValidateCopiesOrderDetails('p',requiredTransactionFailedData.page.telefono);
        this.ValidateCopiesOrderDetails('button',requiredTransactionFailedData.page.buttonTryAgain);
        this.ValidateCopiesOrderDetails('button',requiredTransactionFailedData.page.buttonContactExecutive);
        this.ValidateCopiesOrderDetails('span',requiredTransactionFailedData.page.labelPrint);
        this.ValidateCopiesOrderDetails('span',requiredTransactionFailedData.page.Copyright);
    }

    ValidateCopiesOrderDetails(etiqueta,copy){
        cy.contains(`${etiqueta}`,`${copy}`)
        .should('be.visible');
    }

    ValidateImagenOrderDetails(num,linkImagen){
        cy.get('img').eq(num).should('have.attr', 'src',`${linkImagen}`);
    }

    ValidateOptionEdit(numButon,copy){
        const edit1 = ':nth-child(3) > .css-muevl6-MuiStack-root > .MuiLink-root > .css-1bwyy7o-MuiStack-root > .MuiTypography-root';
        const edit2 = '.css-g513ql-MuiStack-root > .MuiTypography-root';
        const edit3 = ':nth-child(5) > .css-muevl6-MuiStack-root > .MuiLink-root > .css-1bwyy7o-MuiStack-root > .MuiTypography-root';

        if (numButon==1) {
            cy.contains(edit1,`${copy}`).should('be.visible');

        } else if(numButon==2){
            cy.contains(edit2,`${copy}`).should('be.visible');

        } else if(numButon==3){
            cy.contains(edit3,`${copy}`).should('be.visible');
        }
    }

    ValidateImagenPaymentsOrderDetails(etiqueta,num,copy){
        cy.get(`${etiqueta}`).eq(num)
        .should('have.attr', 'src', `${copy}`);
    }

    MakePayment(flag){
        this.preTestingPaymentsMetods(flag);
        this.clickButtonPayNowOrderDetails();
    }

    preTestingPaymentsMetods(flag){
        pagePayments.addCreditCardPayments(flag);
    }

    validateTitleModalOrderDetails(){
        pagePayments.ValidateTitleModalPayments();
    }

    validateButtonPay(copy){
        cy.get('[data-testid="2"]').scrollIntoView().contains(copy).should('be.visible');
    }

    clickButtonPayNowOrderDetails(){
        cy.contains('button',requiredOrderDetailsData.page.buttonContinue).click();
    }

    clickButtonBackOrderDetails(){
        cy.contains('span',requiredOrderDetailsData.page.Copyright).click();
    }

}

export default PageOrderDetails