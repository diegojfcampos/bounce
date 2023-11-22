/// <reference types="cypress" />

describe('Search component tests', () => {
  beforeEach(() => {
    
    cy.visit('http://34.246.121.159:3000/');
  });

  it('should allow searching for a country', () => {
    const searchTerm = 'Ireland';

    cy.get('[data-test=country-input]').type(`${searchTerm}{enter}`);

  });
  
});
