class TransactionHistoryPage {

    selectorsList(){
        const selectors = {
            mineTransactions: "[href='/personal']",
            transactionList: "[data-test='transaction-list']",
            noTransactionAlert: "[data-test='empty-list-header']"
        }

        return selectors
    }

    checkTransactionHistory() {
        cy.get(this.selectorsList().mineTransactions).click()
        cy.get(this.selectorsList().transactionList)
    }

    checkNoTransactionHistory() {
        cy.get(this.selectorsList().mineTransactions).click()
        cy.get(this.selectorsList().noTransactionAlert)
    }

}

export default TransactionHistoryPage