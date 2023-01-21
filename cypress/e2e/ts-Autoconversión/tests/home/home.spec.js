import PageHome from '../../pages/home/home.cy'

const pageHome = new PageHome();
const requiredHomeData = require('../../fixtures/home/homeData.json')

describe('Pruebas App Autoconversion', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('Verificacion del Home Lead', () => {
      pageHome.VerifyVisualHome();
    })
})