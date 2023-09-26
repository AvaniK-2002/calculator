
describe('Calculator', () => {
    it('performs addition correctly', () => {
        cy.visit('index.html'); 

        cy.get('.number[value="2"]').click();
        cy.get('.operation[value="+"]').click();
        cy.get('.number[value="3"]').click();
        cy.get('.operation[value="="]').click();

        cy.get('#display').should('have.value', '5');
    });

   
});
