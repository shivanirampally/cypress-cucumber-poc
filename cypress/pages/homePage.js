class HomePage {

    // Navigation menu details
    navigationMenus = [
        { name: "Home", href: "/" },
        { name: "Practice", href: "/practice" },
        { name: "Demo Apps", href: "/demo" },
        { name: "Challenges", href: "/challenges" },
        { name: "Blogs", href: "/blog" }
    ];

    // Home page header
    homePageHeader() {
        return cy.get("#home-hero-title");
    }

    // Main navigation
    navigationBar() {
        return cy.get("#nav");
    }

    // Navigation menu
    navigationMenu(menu) {

        return this.navigationBar()
            .find(`a[href="${menu.href}"]`);

    }

}

export default new HomePage();