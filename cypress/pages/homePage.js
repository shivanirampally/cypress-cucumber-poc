class HomePage{

    //================================================    
    //Home page Constants
    //Stores the Home Page navigation menu details.
    //Topic: JavaScript Arrays & Objects    
    //================================================
   navigationMenus = [
        { name: "Home", href: "/" },
        { name: "Practice", href: "/practice" },
        { name: "Demo Apps", href: "/demo" },
        { name: "Challenges", href: "/challenges" },
        { name: "Blogs", href: "/blog" }
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