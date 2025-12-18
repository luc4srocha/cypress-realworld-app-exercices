class TransactionPage {

    selectorsList(){
        const selectors = {
            newTransactionButton: ".MuiButton-contained",
            firstContactField: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[data-test='transaction-create-amount-input']",
            noteField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']"

        }

        return selectors
    }

    clickTransactionButton() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }
    sendMoneyToContact(){  
        cy.get(this.selectorsList().firstContactField).click()
        cy.get(this.selectorsList().amountField).type('50')
        cy.get(this.selectorsList().noteField).type('Test')
        cy.get(this.selectorsList().payButton).click()
    }

}

export default TransactionPage