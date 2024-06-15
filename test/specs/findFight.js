const { expect } = require('@wdio/globals');
const bestPricePage = require('../pageobjects/bestprice.page');

describe('Test BookSquare', () => {
    before(async () => {
        await bestPricePage.open('https://www.bestprice.vn/');
        await browser.maximizeWindow();
        await browser.pause(5000);
    });

    beforeEach(async () => {
        
    });

    it('Click input', async () => {
        await bestPricePage.openplaceFrom();
        await bestPricePage.inputFromSearch('Han');
        await bestPricePage.selectHANAirport();
        await bestPricePage.inputToSearch('Ho ch');
        await bestPricePage.selectSGNAirport();
        await bestPricePage.openSelectDepartureDate();
        await bestPricePage.SelectDate2906();
        await bestPricePage.openSelectReturnDate();
        await bestPricePage.SelectDate0107();
        await bestPricePage.openFlightPassenger();
        await bestPricePage.plusChildPassenger();
        await bestPricePage.clickSearch();
        await bestPricePage.waitSelectDepartShow();
    })
 
    afterEach(async () => {
        
    });

    after(async () => {

    });
});
