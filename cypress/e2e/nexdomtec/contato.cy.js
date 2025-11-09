import contatoData from '../../fixtures/contato.json';
import { camposContato } from '../../selectors/nexdompages'

describe('Página de Contato', () => {
  beforeEach(() => {
    cy.visitaResponsiva('/contato', 'desktop')
  })

  it('validar que o formulário de contato será preenchido e enviado', () => {
    cy.contains('Fale conosco').should('be.visible')
    cy.formularioFaleConosco()

    cy.contains('As suas respostas foram recebidas com sucesso!').should('be.visible')
  })

  it('validar que o campo email aceita apenas email valido', () => {
    cy.contains('Fale conosco').should('be.visible')
    cy.formularioFaleConosco({ ...contatoData.infoUsuario, email: 'a@a' })

    cy.contains('Este campo é obrigatório.').should('be.visible')
    cy.contains('Your submission failed because of an error.').should('be.visible')
  })

  it('validar que o campo telefone aceita apenas números e caracteres de telefone', () => {
    cy.contains('Fale conosco').should('be.visible')
    cy.formularioFaleConosco({ ...contatoData.infoUsuario, phone: '´' })

    cy.contains('O Campo Aceita Apenas Números e Caracteres de Telefone (#, -, *, etc).').should('be.visible')
    cy.contains('Your submission failed because of an error.').should('be.visible')
  })

  it('validar que o formulário de contato vazio não será enviado e as mensagens obrigatórias serão exibidas', () => {

    cy.contains('Fale conosco').should('be.visible')
    const camposObrigatorios = [
      camposContato.nome,
      camposContato.email,
      camposContato.empresa
    ]
    
    cy.get(camposContato.enviar).click();

    camposObrigatorios.forEach((selector) => {
      cy.get(selector).then(($input) => {
        expect($input[0].validationMessage).to.not.be.empty;
      })
    })
  })
});