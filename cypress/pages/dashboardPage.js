class DashboardPage {

    // Dashboard Elements
    dashboardHeader() {
        return cy.contains("Welcome back");
    }

    financialSummarySection() {
        return cy.get('[data-testid="dashboard-stat-cards"]');
    }

    financialCards() {
        return cy.get('[data-testid="stat-card"]');
    }

    quickActionsSection() {
        return cy.get('[data-testid="quick-actions-section"]');
    }

    quickActionCards() {
        return cy.get('[data-testid^="quick-action-"]');
    }

    navigationMenu() {
        return cy.get('[data-testid="bank-sidebar"]');
    }

    recentTransactionsSection() {
        return cy.get('[data-testid="recent-transactions-section"]');
    }

    backToDashboardBtn() {
        return cy.get('[data-testid="back-to-dashboard-btn"]');
}

    // Dashboard Actions
    openAccounts() {
        cy.get('[data-testid="sidebar-link-accounts"]').click();
    }
    openTransfer() {
        cy.get('[data-testid="sidebar-link-transfer"]').click();
    }
    navigateToDashboard() {
        this.backToDashboardBtn()
            .should("be.visible")
            .click();
    }

    
    // Dashboard Validations
    verifyDashboard() {
        cy.location("pathname")
            .should("eq", "/bank/dashboard");
        this.dashboardHeader()
            .should("be.visible");
    }

    verifyFinancialCards() {
        this.financialSummarySection()
            .should("be.visible");
        this.financialCards()
            .should("have.length", 4);
    }

    verifyQuickActions() {
        this.quickActionsSection()
            .should("be.visible");
        this.quickActionCards()
            .should("have.length", 5);
    }

    verifyNavigationMenu() {
        this.navigationMenu()
            .should("be.visible");
    }

    verifyRecentTransactions() {
        this.recentTransactionsSection()
            .should("be.visible");
    }

}

export default new DashboardPage();