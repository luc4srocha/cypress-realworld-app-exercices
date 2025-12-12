import LoginPage from '../../pages/loginPage'
import DashboardPage from '../../pages/dashboardPage'
import UserPage from '../../pages/userPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const userPage = new UserPage()

describe('Login RWA Tests', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('Heath93','s3cret')
    dashboardPage.checkDashboardPage()

  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('wrong-user','wrong-password')
    loginPage.checkAccessInvalid()

  })

    it('Register new user - success', () => {
    userPage.accessUserPage()
    userPage.registerWithAnyUser('Spider', 'Man', 'spiderman','maryjane','maryjane')

  })

    it('Register new user - incomplete information', () => {
    userPage.accessUserPage()
    userPage.clickSignUpButton()
    userPage.checkIncompleteFields()

  })

}); 