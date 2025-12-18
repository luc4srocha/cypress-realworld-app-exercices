class TransactionPage {

    selectorsList(){
        const selectors = {
            newTransactionButton: ".MuiButton-contained",
            firstContactField: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[data-test='transaction-create-amount-input']",
            noteField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']",
            balanceField: "[data-test='sidenav-user-balance']"

        }

        return selectors
    }

    clickTransactionButton() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }
    sendMoneyToContact(){  
        cy.get(this.selectorsList().firstContactField).click()
        cy.get(this.selectorsList().balanceField)
            .invoke('text')
            .then((text) => {
                const valor = Number(
                    text
                        .replace('$', '')
                        .replace(',', '')
                        .trim()
                )

                const lowerValor = valor - 1

                cy.get(this.selectorsList().amountField).type(lowerValor.toString())
            })

        cy.get(this.selectorsList().noteField).type('Test')
        cy.get(this.selectorsList().payButton).click()
    }

}

export default TransactionPage