// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

const faker = require("faker-br")

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, senha) => { 

    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()

 })

   Cypress.Commands.add("Criar_perfil", () => { 
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Carlos G. Rodrigues')
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
    cy.get('[data-test="register-submit"]').click()
    cy.get('[data-test="dashboard-createProfile"]').click();
    cy.get('#mui-component-select-status').click()
    cy.get('.MuiMenu-list li').then(($li) => {
        const items = $li.toArray()
        return Cypress._.sample(items)
    }).click() 
       cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Automações Ltda.')
       cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.automações.com.br')
       cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Mauá  ');
       cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('São Paulo');
       cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Pessoal');
       cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('A criar');
       cy.get('[rows="1"]').type('Profissional da área de Qualidade');
       cy.get('[data-test="profile-submit"]').click();


 })