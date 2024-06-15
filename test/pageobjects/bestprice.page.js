const { $ } = require('@wdio/globals');
const Page = require('./open.page.url');

class LoginPage extends Page {

    get eplaceFrom(){
        return $('input[name="From"]');
    }
    async openplaceFrom() {
        await (await this.eplaceFrom).click();
    }
    get eFromSearch() {
        return $('input[placeholder="Mã sân bay, Tên sân bay, Tên thành phố..."]');
    }
    async inputFromSearch(fromplace) {
        await browser.pause(1000);
        await (await this.eFromSearch).waitForDisplayed({ timeout: 3000 });
        await (await this.eFromSearch).setValue(fromplace);
    }
    async selectHANAirport (){
        await browser.pause(1000);
        await browser.execute(() => {
            document.querySelector('p[onclick="update_flight_destination_v2(\'Hà Nội (HAN)\',\'flight_from\',\'\',\'Hà Nội\')"]').click();
        });
    }
    get eToSearch() {
        return $('//*[@id="to_des"]/div/div/div[2]/div/div[2]/span/input');
    }
    async inputToSearch(fromplace) {
        await browser.pause(1000);
        await (await this.eToSearch).waitForDisplayed({ timeout: 3000 });
        await (await this.eToSearch).setValue(fromplace);
    }
    async selectSGNAirport (){
        await browser.pause(1000);
        await browser.execute(() => {
            document.querySelector('p[onclick="update_flight_destination_v2(\'Hồ Chí Minh (SGN)\',\'flight_to\',\'\',\'Hồ Chí Minh\')"]').click();
        });
    }
    get edepartureFlightdate(){
        return $('#departure_date_flight');
    }
    async openSelectDepartureDate(){
        await browser.pause(1000);
        await (await this.edepartureFlightdate).click();
    }
    get eDate2906(){
        return $('//*[@id="ui-datepicker-div"]/div[1]/table/tbody/tr[5]/td[7]');
    }
    async SelectDate2906(){
        await browser.pause(1000);
        await (await this.eDate2906).click();
    }
    get ereturnFlightdate(){
        return $('#returning_date_flight');
    }
    async openSelectReturnDate(){
        await browser.pause(1000);
        await (await this.ereturnFlightdate).click();
    }
    get eDate0107(){
        return $('//*[@id="ui-datepicker-div"]/div[2]/table/tbody/tr[1]/td[2]');
    }
    async SelectDate0107(){
        await browser.pause(1000);
        await (await this.eDate0107).click();
    }
    get eflightPassenger(){
        return $('#flight_passenger');
    }
    async openFlightPassenger(){
        await browser.pause(1000);
        await (await this.eflightPassenger).click();
    }
    get eplusChildPassenger(){
        return $('.popover-content .mktnd_btn_children_adult_plus > .ico-plus');
    }
    async plusChildPassenger(){
        await browser.pause(1000);
        await (await this.eplusChildPassenger).click();
    }
    get btnSearchFlight(){
        return $('#search_button');
    }
    async clickSearch(){
        await browser.pause(1000);
        await (await this.btnSearchFlight).click();
    }
    get selectDepart(){
        return $('input[name ="select_depart"]');
    }
    async waitSelectDepartShow(){
        await browser.pause(1000);
        await (await this.selectDepart).isDisplayed();
    }
}

module.exports = new LoginPage();