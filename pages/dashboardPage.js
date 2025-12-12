class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardGrid: ".MuiDrawer-modal",
        }

        return selectors
}

    checkDashboardPage() {
        cy.location('href').should('equal', 'http://localhost:3000/')
        
    }

}

export default DashboardPage