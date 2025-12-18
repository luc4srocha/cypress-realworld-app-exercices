import LoginPage from '../Exercices/pages/loginPage'
import DashboardPage from '../Exercices/pages/dashboardPage'
import UserPage from '../Exercices/pages/userPage'
import TransactionPage from '../Exercices/pages/transactionPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const userPage = new UserPage()
const transactionPage = new TransactionPage()

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


    it('Sending money with sufficient funds', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('Arvilla_Hegmann','s3cret')
    transactionPage.clickTransactionButton()
    transactionPage.sendMoneyToContact()

  })

}); 