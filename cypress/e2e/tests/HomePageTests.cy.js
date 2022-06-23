
import HomePage from '../../pageobjects/homepage';

const homepage = new HomePage();

beforeEach(() => {

    cy.visit('/');
    cy.contains('Platform').trigger('mousemove', { force: true });
    cy.get(homepage.accept_cookie_button, { timeout: 10000 }).click();

})

describe('HomePage Validations', function () {

    it('Bookmarks Validation', function () {

        cy.fixture('datasheet').then((fixture_data) => {

            const bookmark_arr = Array.from(fixture_data.bookmarks_in_homepage.split(',')).map(item => item.trim());
            const bookmarks = new Set(bookmark_arr);
            //cy.visit('/');
            cy.get(homepage.homepage_bookmarks).each(($bookmark) => {

                const bookmark_text = $bookmark.text();
                if (bookmarks.has(bookmark_text)) {
                    cy.log(bookmark_text + " is present");
                }
                else {
                    cy.log(bookmark_text + " is NOT available in " + fixture_data.bookmarks_in_homepage).then(() => {
                        expect([...bookmark_arr]).to.be.an('array').that.does.include(bookmark_text);
                    })
                }

            });
        });

    })


    it('search feature', function () {

        cy.fixture('datasheet').then((fixture_data) => {

            //cy.visit('/');
            //cy.contains('Platform').trigger('mousemove', { force: true });
            //cy.get(homepage.accept_cookie_button, { timeout: 10000 }).click();
            cy.get(homepage.search_icon).click({ force: true });
            cy.get(homepage.search_textbox_on_homepage).type(fixture_data.search_text, { force: true });
            cy.get(homepage.search_textbox_on_homepage).type('{enter}', { force: true });
            cy.get(homepage.main_webelement_of_zeroresults).as('zeroResults');


            cy.get('@zeroResults').find('div > div > h1').first().invoke('text').as('text1').
                then(() => {
                    cy.get('@zeroResults').find('div > div > h1+div').first().invoke('text').as('text2')
                }).then(() => {
                    cy.xpath(homepage.zero_results_found_text_element).
                        invoke('text').as('text3')
                });

            //Validating zero results found message.

            cy.get('@text1').then(text1 => { cy.wrap(expect(fixture_data.zeroresults_fullerrormessage).toContain(text1)) });
            cy.get('@text2').then(text2 => { cy.wrap(expect(fixture_data.zeroresults_fullerrormessage).toContain(text2)) });
            cy.get('@text3').then(text3 => { cy.wrap(expect(fixture_data.zeroresults_fullerrormessage).toContain(text3)) });

        });
    })




});
