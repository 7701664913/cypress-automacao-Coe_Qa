/// <reference types="cypress" />

const faker = require('faker-br')
describe('Funcionalidade cadastro', () => {
    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('Deve fazer cadastro com sucesso', () => {
 
   cy.Criar_perfil();

    });



});