describe('Página Carreiras', () => {
  beforeEach(() => {
    cy.visitaResponsiva('/carreiras', 'tablet')

  })
  it('validar página de carreiras Nexdom', () => {
    cy.acessarVagas()
  })
})