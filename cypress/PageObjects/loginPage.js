class loginPage{
   
    elements = {
        txtusername: () => cy.get('#username'),
        txtpassword: () => cy.get('#password'),
        btnlogin: () => cy.get('.btn-primary'),
        lblLoginValidation: () => cy.get(".alert"),
        logoutmsg: () => cy.get('#flash')

}
}

export default loginPage;