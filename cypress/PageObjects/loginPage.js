class loginPage{
   
    elements = {
        txtusername: () => cy.get('#username'),
        txtpassword: () => cy.get('#password'),
        btnlogin: () => cy.get('.btn-primary'),
        lblLoginValidation: () => cy.get(".alert"),
    

}
}

export default loginPage;