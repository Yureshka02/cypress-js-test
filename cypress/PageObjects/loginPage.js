class loginPage{
   
    elements = {
        txtusername: () => cy.get('#username'),
        txtpassword: () => cy.get('#password'),
        btnlogin: () => cy.get('.btn-primary'),

}
}

export default loginPage;