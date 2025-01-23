describe('Testes automatizados projeto D3 Works', () => {

  beforeEach(() => {
    cy.visit('https://h3-works-desafio.vercel.app/')
  });

  it('testando página inicial e questionarios com viewport de mobile', () => {
    cy.viewport('iphone-xr')
    cy.get("h2").contains("Parabéns por chegar até aqui!")
    cy.get("p").contains("Todos os direitos reservados. D3 Soluções Especializadas em Tecnologia da Informação LTDA.")

    cy.get('button').contains('Iniciar quiz').click();

    cy.get('p').contains('Qual das seguintes opções NÃO é considerada uma das principais responsabilidades de um desenvolvedor backend?');

    cy.get('button').contains('Próximo').click();

    cy.get('p').contains('Qual das seguintes tecnologias é primariamente utilizada para manipular o DOM (Document Object Model) e criar interfaces dinâmicas em aplicações web?');

    cy.get('button').contains('Próximo').click();

    cy.get('p').contains('Escreva uma redação falando sobre o impacto das IAs na área da tecnologia.');

    cy.get('button').contains('Finalizar').should('be.visible');
  })

  it('testando página inicial e questionarios com viewport de desktop', () => {
    cy.viewport('macbook-13')
    cy.get("h2").contains("Parabéns por chegar até aqui!")
    cy.get("p").contains("Todos os direitos reservados. D3 Soluções Especializadas em Tecnologia da Informação LTDA.")

    cy.get('button').contains('Iniciar quiz').click();

    cy.get('p').contains('Qual das seguintes opções NÃO é considerada uma das principais responsabilidades de um desenvolvedor backend?');

    cy.get('button').contains('Próximo').click();

    cy.get('p').contains('Qual das seguintes tecnologias é primariamente utilizada para manipular o DOM (Document Object Model) e criar interfaces dinâmicas em aplicações web?');

    cy.get('button').contains('Próximo').click();

    cy.get('p').contains('Escreva uma redação falando sobre o impacto das IAs na área da tecnologia.');

    cy.get('button').contains('Finalizar').should('be.visible');
  })
})