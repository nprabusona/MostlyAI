import ContactPage from '../../pageobjects/contactpage'
import HomePage from '../../pageobjects/homepage';

const homepage = new HomePage();
const contactpage = new ContactPage();

beforeEach(() => {

    cy.visit('/');
    cy.contains('Platform').trigger('mousemove', { force: true });
    cy.get(homepage.accept_cookie_button, { timeout: 10000 }).click();

})

describe('Contact screen validations and tests', function () {


    it('contact mostly.AI team', function () {

        cy.fixture('datasheet').then((fixture_data) => {


            cy.get(homepage.homepage_bookmarks).contains('Contact').trigger('mouseover');
            cy.get(homepage.hovering_bookmark).click();
            cy.contains(contactpage.main_text).trigger('mousemove', { force: true }, { timeout: 10000 });
            cy.get(contactpage.firstname_textbox).type(fixture_data.firstname);
            cy.get(contactpage.lastname_textbox).type(fixture_data.lastname);
            cy.get(contactpage.emailID_textbox).type(fixture_data.email);
            cy.get(contactpage.mobilePhone_textbox).type(fixture_data.mobilephone);
            cy.get(contactpage.company_textbox).type(fixture_data.companyname);
            cy.get(contactpage.description_textbox).type(fixture_data.description_text);
            cy.get(contactpage.offers_update_checkbox).check();
            cy.get(contactpage.sendmessage_button_element).trigger('mouseover');





        });

    });
});
