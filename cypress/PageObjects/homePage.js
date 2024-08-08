class homePage{
    elements = {
    lblTitle: ()=> cy.get('#flash'),
    btnLogout: ()=> cy.get('.icon-2x'),
    lblLogout: ()=> cy.get('#flash')
    }

logoutSuccess(){
    this.elements.btnLogout().click();
    this.elements.lblLogout().should('contain', 'You logged out of the secure area!');
}
}
export default homePage;