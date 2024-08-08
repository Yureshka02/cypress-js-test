/// <reference types="cypress" />

import parameters from '../../fixtures/parameters.json';
import LoginPage from '../../PageObjects/loginPage';
import HomePage from '../../PageObjects/homePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Verify Login Functionality', function() {

    beforeEach(function() {
        cy.visit('/login');
    });

    it('Verify Login with invalid credentials', function() {
      cy.login(parameters.loginPage.wusername, parameters.loginPage.wpassword);
      loginPage.elements.lblLoginValidation().should('contain', parameters.loginPage.wrongunmsg);
  });

    it('Verify Login with valid credentials', function() {
        cy.login(parameters.loginPage.username, parameters.loginPage.password);
        cy.url().should('contain', 'secure');
        homePage.elements.lblTitle().should('contain', parameters.homePage.title);
    });

   

});
