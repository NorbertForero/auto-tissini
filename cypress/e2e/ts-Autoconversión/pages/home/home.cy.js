

const requiredHomeData = require('../../fixtures/home/homeData.json')

class PageHome {

  VerifyVisualHome(){
    this.VerifyImagenBackground(requiredHomeData.BackgroundImage.url);
    this.verifyLogo(requiredHomeData.Logo.src);
    this.verifyCopies('span',requiredHomeData.Descripcion);
    this.verifyCopies('button',requiredHomeData.Button);
  }

  VerifyCopiesCardView(){
      this.verifyCopies();
      this.verifyLogo();
  }

  VerifyImagenBackground(urlImagen){
    cy.get('#__next > div').should('have.css','background-image',`url("http://localhost:3000${urlImagen}")`);
  }

  verifyLogo(linkImagen){
    cy.get('img').should('have.attr','src',`${linkImagen}`);
  }

  verifyCopies(etiqueta,copy){
    cy.contains(`${etiqueta}`,`${copy}`).should('be.visible');
  }

  clickButtonLead(){
    cy.contains('button', 'Empezar ahora').click()
  }

}

export default PageHome