import PageHome from "../../pages/home/home.cy";
import PageHomeLogin from "../../pages/homeLogin/homeLogin.cy";
import PageLogin from "../../pages/login/login.cy";

//PegesRequieres
const pageHome = new PageHome();
const pageHomeLogin = new PageHomeLogin();
const pageLogin = new PageLogin();

//ArchivesJsonRequieres
const requiredCartData = require('../../fixtures/cart/cartData.json')

class PageCart {

    ValidateVisualCart(){
        this.preTestingCart();
        this.AddProductsCartForOtherTest();
        this.validateCopiesCart('h2', requiredCartData.page.title, 0);
        this.validateCopiesCart('p', requiredCartData.page.NumArticles);
        this.validateProductAddCart(requiredCartData.kit[0].name,requiredCartData.kit[0].talla,requiredCartData.kit[0].amount,requiredCartData.kit[0].promoPrice,requiredCartData.kit[0].price,requiredCartData.kit[0].imagen,0);
        cy.wait(500);
        this.validateProductAddCart(requiredCartData.kit[1].name,requiredCartData.kit[1].talla,requiredCartData.kit[1].amount,requiredCartData.kit[1].promoPrice,requiredCartData.kit[1].price,requiredCartData.kit[1].imagen,1);
        cy.wait(500);
        this.validateProductAddCart(requiredCartData.kit[2].name,requiredCartData.kit[2].talla,requiredCartData.kit[2].amount,requiredCartData.kit[2].promoPrice,requiredCartData.kit[2].price,requiredCartData.kit[2].imagen,2);
        this.ValidateTotalCostOrder();
        this.validateCopiesCart('button', requiredCartData.page.buttonPay);
        this.validateCopiesCart('span', requiredCartData.page.labelCleanCart);
        this.validateCopiesCart('span', requiredCartData.page.Copyright);
    }

    ValidateTotalCostOrder(){
        this.validateCopiesCart('h3', requiredCartData.page.ResumenCost[0]);
        this.validateCopiesCart('p', requiredCartData.page.ResumenCost[1]);
        this.validateCopiesCart('h2', requiredCartData.page.Costs[0]);
        this.validateCopiesCart('p', requiredCartData.page.ResumenCost[2]);
        this.validateCartTotalPay(requiredCartData.page.Costs[1]);
    }

    AddProductsCartForOtherTest(){
        pageHomeLogin.buttonKitHome(3);
        this.ValidateCart();
        this.buttonAddProductsCart();
        this.buttonGoToCart();
    }

    ValidateCart(){
        const iconNumCartProduct = '#__next > div.MuiBox-root.css-151yxh2 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation3.css-17a0h84-MuiPaper-root > div > div > div > button:nth-child(4) > span.MuiBadge-root.BaseBadge-root.css-iwoqlj-MuiBadge-root > span.MuiBadge-badge.MuiBadge-standard.MuiBadge-anchorOriginTopRight.MuiBadge-anchorOriginTopRightRectangular.MuiBadge-overlapRectangular.MuiBadge-colorPrimary.BaseBadge-badge.css-10xnq9b-MuiBadge-badge';
        cy.get("body").then($body => {
            if ($body.find(iconNumCartProduct).length > 0) {   
            //evaluates as true if Element exists at all
                cy.get(iconNumCartProduct).then($Element => {
                    if ($Element.is(':visible')){
                        //you get here only if button EXISTS and is VISIBLE
                        this.CleanCart();
                        cy.wait(7000);
                        this.KitAdd("15","L","13");
                    }
                });
            } else {
                //you get here if the Element DOESN'T EXIST
                cy.wait(7000);
                this.KitAdd("15","L","13");
            }
        });
    }

    ValidateModalGoCart(){
        this.preTestingCart();
        pageHomeLogin.buttonKitHome(3);
        this.ValidateCart();
        this.buttonAddProductsCart();
        const imagen = 'body > div.MuiModal-root.css-79ws1d-MuiModal-root > div.MuiBox-root.css-12mmj5x > div.MuiBox-root.css-1037467 > img'
        cy.get(imagen).should('have.attr','src','/assets/icons/good.png');
        this.validateCopiesCart('h3',requiredCartData.modalGoCart.title);
        this.validateCopiesCart('p',requiredCartData.modalGoCart.description);
        this.validateCopiesCart('button',requiredCartData.modalGoCart.buttonGoCart);
        this.validateCopiesCart('button',requiredCartData.modalGoCart.buttonKeepBuying);
    }

    VerifyImagenProduct(numImg,urlImagen){
        cy.get('img').eq(numImg).should('have.attr','src',`${urlImagen}`);
    }

    KitAdd(t1,t2,t3){
        this.addProductCart(t1);
        this.addProductCart(t2);
        this.addProductCart(t3);
    }

    CleanCart(){
        this.buttonNavBar(4);
        this.buttonCleanCart();
        this.ButtonYesModalCleanCart();
        this.buttonViewProduct();
        pageHomeLogin.buttonKitHome(2);
    }

    preTestingCart(){
        pageHome.clickButtonLead();
        pageLogin.Login();
    }

    addProductCart(talla){
        cy.get('span').contains('Elige la talla').click();
        cy.wait(1000)
        cy.contains('button', talla).click();
        cy.contains('button',  'Seleccionar').click();
    }

    validateProductAddCart(name,talla,amount,promoPrice,price,imagen,numImg){
        this.validateCopiesCart('p', name);
        this.validateCopiesCart('p',`${talla} - ${amount}`);
        this.validateCopiesCart('p',promoPrice);
        this.validateCopiesCart('p',price);
        this.VerifyImagenProduct(numImg,imagen);
    }

    validateCopiesCart(etiqueta,copy){
        cy.contains(`${etiqueta}`,`${copy}`)
        .should('be.visible');
    }

    validateCartTotalPay(copy){
        cy.get(':nth-child(3) > .MuiTypography-h2').contains(copy).should('be.visible');
    }

    buttonAddProductsCart(){
        cy.contains('button','Agregar al carrito').click();
    }

    buttonGoToCart(){
        cy.contains('button','Ir al carrito').click();
    }

    buttonCleanCart(){
        cy.contains('Vaciar carrito').click();
    }

    ButtonYesModalCleanCart(){
        cy.contains('button','Si').click();
    }

    ButtonNoModalCleanCart(){
        cy.contains('button','No').click();
    }

    ButtonCloseModalCleanCart(){
        cy.get('.css-14vhqc4-MuiStack-root > .MuiButtonBase-root > .material-icons').click();
    }

    buttonViewProduct(){
        cy.get('[id=":rh:"]').click();
    }

    buttonNavBar(opcion){
        cy.get(`.MuiTabs-flexContainer > :nth-child(${opcion})`).click();
    }

    clickButtonPay(){
        cy.contains('button','Pagar').click();
    }
}

export default PageCart