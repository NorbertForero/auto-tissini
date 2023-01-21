

const requiredOnboardingData = require('../../fixtures/login/onboardingData.json')

class PageOnboarding {

    ValidateVisualOnboarding(){
        this.ValidateModalOnboarding(1,
            requiredOnboardingData.VisualOnboarding[0].image,
            requiredOnboardingData.VisualOnboarding[0].name,
            requiredOnboardingData.VisualOnboarding[0].jobTitle,
            requiredOnboardingData.VisualOnboarding[0].title,
            requiredOnboardingData.VisualOnboarding[0].description,
            requiredOnboardingData.VisualOnboarding[0].button);
        cy.wait(1000);
        this.buttonNextOnboarding();
        cy.wait(500);
        
        this.ValidateModalOnboarding(2,
            requiredOnboardingData.VisualOnboarding[1].image,
            requiredOnboardingData.VisualOnboarding[1].name,
            requiredOnboardingData.VisualOnboarding[1].jobTitle,
            requiredOnboardingData.VisualOnboarding[1].title,
            requiredOnboardingData.VisualOnboarding[1].description,
            requiredOnboardingData.VisualOnboarding[1].button);
        cy.wait(1000);
        this.buttonNextOnboarding();
        cy.wait(500);
        this.ValidateModalOnboarding(3,
            requiredOnboardingData.VisualOnboarding[2].image,
            requiredOnboardingData.VisualOnboarding[2].name,
            requiredOnboardingData.VisualOnboarding[2].jobTitle,
            requiredOnboardingData.VisualOnboarding[2].title,
            requiredOnboardingData.VisualOnboarding[2].description,
            requiredOnboardingData.VisualOnboarding[2].button);
        
        cy.wait(1000);
        this.buttonNextOnboarding();
        cy.wait(500);
        this.ValidateModalOnboarding(4,
            requiredOnboardingData.VisualOnboarding[3].image,
            requiredOnboardingData.VisualOnboarding[3].name,
            requiredOnboardingData.VisualOnboarding[3].jobTitle,
            requiredOnboardingData.VisualOnboarding[3].title,
            requiredOnboardingData.VisualOnboarding[3].description,
            requiredOnboardingData.VisualOnboarding[3].button);
        
        cy.wait(1000);
        this.buttonFinishOnboarding();
        this.validateVideoOnboarding();
        cy.wait(17000);

        this.buttonCloseVideoOnboarding();
    }

    ValidateModalOnboarding(numImagen,image,name,jobTitle,title,description,button){
        this.VerifyImagenBackgroundOnboarding(numImagen,image);
        this.validateCopiesOnboarding('span', name);
        this.validateCopiesOnboarding('span', jobTitle);
        this.validateCopiesOnboarding('h2', title);
        this.validateCopiesOnboarding('span', description);
        this.validateCopiesOnboarding('button', button);
    }

    VerifyImagenBackgroundOnboarding(numImagen,urlImagen){
        if (numImagen==1) {
            cy.get('.css-umycsi-MuiContainer-root').should('have.css','background-image',`url("http://localhost:3000${urlImagen}")`).should('be.visible');
        } else {
            if (numImagen==2) {
                cy.get('.css-1xjroe3-MuiContainer-root').should('have.css','background-image',`url("http://localhost:3000${urlImagen}")`).should('be.visible');
            } else {
                if (numImagen==3) {
                    cy.get('.css-1aa0oqr-MuiContainer-root').should('have.css','background-image',`url("http://localhost:3000${urlImagen}")`).should('be.visible')
                } else {
                    if (numImagen==4) {
                        cy.get('.css-7ro0be-MuiContainer-root').should('have.css','background-image',`url("http://localhost:3000${urlImagen}")`).should('be.visible')
                    } else {
                        
                    }
                }   
            }  
        }
    }

    validateCopiesOnboarding(etiqueta, copy){
        cy.contains(`${etiqueta}`,`${copy}`)
        .should('be.visible');
    }

    validateVideoOnboarding(){
        cy.get('#vid').should('be.visible');
        cy.get('source').should('have.attr','src','https://tissiniapp.s3.us-east-2.amazonaws.com/video/kits/KIT+01_4.webm#t=9,25')
    }

    buttonNextOnboarding(){
        cy.contains('button',requiredOnboardingData.VisualOnboarding[0].button).click();
    }

    buttonFinishOnboarding(){
        cy.contains('button',requiredOnboardingData.VisualOnboarding[3].button).click();
    }

    buttonCloseVideoOnboarding(){
        cy.get('.css-170alss-MuiStack-root > .MuiButtonBase-root > .uil').click();
    }

}

export default PageOnboarding