/// <reference types="cypress" /> 

describe('', () => {
    
    it('', () =>{
        cy.visit('http://localhost:1667/#/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type('Test1050@mail.com');
        cy.get(':nth-child(2) > .form-control').type('Test1050@');
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('contain','test');        
    });
});