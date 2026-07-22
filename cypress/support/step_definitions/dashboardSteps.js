import { Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../../pages/dashboardPage";

Then("Dashboard should be displayed", () => {
    DashboardPage.verifyDashboard();
});

Then("Financial summary cards should be displayed", () => {
    DashboardPage.verifyFinancialCards();
});

Then("Quick actions should be displayed", () => {
    DashboardPage.verifyQuickActions();
});

Then("Dashboard navigation menu should be displayed", () => {
    DashboardPage.verifyNavigationMenu();
});

Then("Recent transactions section should be displayed", () => {
    DashboardPage.verifyRecentTransactions();
});