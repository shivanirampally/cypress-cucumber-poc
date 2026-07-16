class HomePage{

    //================================================    
    //Home page Constants
    //Stores the Home Page navigation menu details.
    //Topic: JavaScript Arrays & Objects    
    //================================================
   navigationMenus = [
        { name: "Home",       locator: 'a.nav-module__Efbrta__link[href="/"]' },
        { name: "Practice",   locator: 'a.nav-module__Efbrta__link[href="/practice"]' },
        { name: "Demo Apps",  locator: 'a.nav-module__Efbrta__link[href="/demo"]' },
        { name: "Challenges", locator: 'a.nav-module__Efbrta__link[href="/challenges"]' },
        { name: "Blogs",      locator: 'a.nav-module__Efbrta__link[href="/blog"]' }
    ];

    //================================================
    //Home Page locators
    //Topic: Cypress Locators (CSS selector & Tag locator)
    //================================================
    homePageHeader() {
        return cy.get("h1#home-hero-title");
    }

    // Locate a specific Navigation Menu Item
    //Topic: Cypress CSS Selector + DOM Scoping using find()
    navigationMenu(menu) {
        return cy.contains(menu.locator, menu.name);
    }
}

export default new HomePage();