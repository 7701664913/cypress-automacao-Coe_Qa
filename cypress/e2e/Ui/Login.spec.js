/// <reference types="cypress" />

describe('Funcionalidade Login', () => {


    beforeEach(() => {
         cy.visit('login')

    });


    it('Deve fazer login com sucesso', () =>{
       
        cy.login('carlos.geovan-ext@via.com.br','201423')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')

    })


    })

/*     it.only('Validar mensagem de erro quando inserir usuario ou senha invalidos', () => {
     
      cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('ccarlos.geovan-ext@via.com.br')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('201423')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')

});
 */
/* Funcionalidade: Login
Eu como usuario das conexões QA
Quero fazer o login
Para editar meu perfil

Cenário: Login  com sucesso
Cenário: Recuperar senha
Cenário: Deve fazer cadastro com sucesso

Arrange - Dado - Pré requisito => Dado que eu esteja na tela de login
Action -  Quando - Ação do usuario - Quando eu inserir usuario e senha
Assert -  Então - REsultado esperado

*/
