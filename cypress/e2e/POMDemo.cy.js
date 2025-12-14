import {LoginPage} from './Pages/loginPage.cy'

const loginpage=new LoginPage()
describe('Login tests',()=>{

    beforeEach(function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it.skip('Login Test 1',()=>{
        
        loginpage.enterUsername('Admin')
        loginpage.enterpassword('admin123')
        loginpage.clicklogin()
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[type="password"]').type('admin123')
        // cy.get('[type="submit"]').click()
})

    it('Login Test 2',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginpage.enterUsername('Admi')
        loginpage.enterpassword('admin123')
        loginpage.clicklogin()
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[type="password"]').type('admin123')
        // cy.get('[type="submit"]').click()
})
})
it('Login Test 3',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginpage.enterUsername('Admin')
        loginpage.enterpassword('admin123')
        loginpage.clicklogin()
})