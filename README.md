# Cypress SauceDemo POC

## Purpose
This POC was created to evaluate Cypress as a UI automation solution and to demonstrate how automated tests can be executed through a CI workflow using GitHub Actions.
- Ease of setup on Windows environment
- Reusable test design using Cypress commands
- Externalized test data using fixtures
- CI-triggered execution without manual intervention

## Technology Stack
- Cypress (E2E Automation)
- Node.js (v24 used for setup)
- GitHub Actions for CI execution


## Project Structure
cypress/
│
├── e2e/saucedemo/        → Test scenario (purchase flow)
├── fixtures/             → Test data (checkoutData.json)
├── support/              → Reusable commands (login)
│
.github/workflows/        → CI configuration (cypress.yml)

## How to Run Locally
Install dependencies:npm install
Run tests (headless):npx cypress run
Open Cypress UI     :npx cypress open

## CI Execution
GitHub Actions workflow:.github/workflows/cypress.yml
Runs automatically on every push to `main`:
- Installs dependencies
- Executes Cypress tests
- Uploads failure screenshots
