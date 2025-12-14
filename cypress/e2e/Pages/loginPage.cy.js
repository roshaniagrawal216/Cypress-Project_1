export class LoginPage
{
    login_username_textbox='[name="username"]'
    login_password_textbox='[type="password"]'
    login_click='[type="submit"]'
    enterUsername(username)
    {
        cy.get(this.login_username_textbox).type(username)
    }
    enterpassword(password)
    {
        cy.get(this.login_password_textbox).type(password)
    }
    clicklogin()
    {
        cy.get(this.login_click).click()
    }
} 