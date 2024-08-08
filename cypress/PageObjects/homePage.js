class homePage{
    elements = {
    lblTitle: ()=> cy.get('#flash'),
    btnLogout: ()=> cy.get('.icon-2x'),
    lblLogout: ()=> cy.get('#flash')
    }
}
export default homePage;