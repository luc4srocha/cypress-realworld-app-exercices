class UserPage {

    selectorsList(){
        const selectors = {
            firstnameField: "#firstName",
            lastnameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmPasswordField: "#confirmPassword",
            loginButton: ".MuiButton-contained",
            incompleteFieldAlert: ".Mui-error",
            signUpButton: "button"
        }

        return selectors
    }

    accessUserPage() {
        cy.visit('http://localhost:3000/signup')
    }

    registerWithAnyUser(firstname, lastname, username, password, confirmPassword){  
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkIncompleteFields() {
        cy.get(this.selectorsList().incompleteFieldAlert)
    }

     clickSignUpButton() {
        cy.get(this.selectorsList().signUpButton).click()
    }
}

export default UserPage