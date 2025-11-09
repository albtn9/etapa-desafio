import { camposContato, paginaHome } from '../selectors/nexdompages';
import contatoData from '../fixtures/contato.json';

Cypress.Commands.add("visitaResponsiva", (path = "/", size = "desktop") => {
  const sizes = {
    mobile: [375, 667],
    tablet: [768, 1024],
    desktop: [1366, 768],
  };
  const viewport = sizes[size] || sizes.desktop;
  cy.viewport(viewport[0], viewport[1]);
  cy.visit(path);
});

Cypress.Commands.add('formularioFaleConosco', (form = contatoData.infoUsuario) => {
  cy.get(camposContato.nome).type(form.name)
  cy.get(camposContato.email).type(form.email)
  cy.get(camposContato.empresa).type(form.enterprise)
  cy.get(camposContato.cargo).type(form.role)
  cy.get(camposContato.telefone).type(form.phone)
  cy.get(camposContato.assunto).type(form.additionalMessage)

  if (form.termos) {
    cy.get(camposContato.termos)
      .check()
      .should('be.checked')
  }
  cy.get(camposContato.enviar).click()
})

Cypress.Commands.add('clickEmSaibaMais', () => {
  cy.get(paginaHome.hiperlink)
    .contains(paginaHome.saibaMais)
    .click()

  cy.get(paginaHome.tituloh2)
    .contains(/Conheça\s*nossa história/)
    .should('be.visible')
})

Cypress.Commands.add('videoPrincipal', () => {
  cy.contains(paginaHome.textoTitulo).should('exist')

  cy.get(paginaHome.container).should('exist').click({ force: true })

  cy.get(paginaHome.iframe)
    .should('exist')
    .should('be.visible')
    .and('have.attr', 'title', paginaHome.tituloVideo)
    .and('have.attr', 'src')
})

Cypress.Commands.add('acessarVagas',()=>{
    cy.contains('Acessar as vagas')
      .should('be.visible')
      .should('have.attr', 'href', 'https://vempranexdom.gupy.io/')
      .and('have.attr', 'target', '_blank')
      .invoke('removeAttr', 'target')
      .click()
      
    cy.request({
      method: 'GET',
      url: 'https://vempranexdom.gupy.io/',
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
})
