class HomePage {
    getProductCount() {
        return cy.get('div[aria-label="ProductCard"]');
    }

    get25RowsPerPage() {
        return cy.get('li[data-value="25"]');
    }

    getPaginationListBox() {
        return cy.get('div[aria-haspopup="listbox"]').eq(1);
    }

    getOutOfStockCheckBox() {
        return cy.get('input[aria-labelledby="checkbox-label-stockStatus-Show Out of Stock"]');
    }

    getSortByListBox() {
        return cy.get('div[aria-haspopup="listbox"]').eq(0);
    }

    getLowToHigh() {
        return cy.get('li[data-value="price-asc"]');
    }

    getProductPrice() {
        return cy.get('[data-testid="priceLabel"]');
    }
}

export default HomePage;
