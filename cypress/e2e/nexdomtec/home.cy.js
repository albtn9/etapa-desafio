describe('Página Home', () => {
  beforeEach(() => {
    cy.visitaResponsiva('/', 'desktop')
  })
  it('validar lista do menu principal', () => {
    const menu = [
      'Home',
      'Sobre nós',
      'Soluções',
      'Carreiras',
      'Contato'
    ];

    menu.forEach((item) => {
      cy.contains(item).should('be.visible');
    });
  });
  it('validar link saiba mais', () => {
   cy.clickEmSaibaMais()
  })
  it('validar existencia do video principal', () => {
  cy.videoPrincipal()
  })
})
