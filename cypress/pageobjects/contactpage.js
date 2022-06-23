class ContactPage{

    main_text = "We'll get back to you!"
    firstname_textbox = '[name=firstname]';
    lastname_textbox = '[name=lastname]';
    emailID_textbox = '.hs-input[name=email][id^=email]';
    mobilePhone_textbox = '[name=mobilephone]';
    company_textbox = '[name=company]';
    description_textbox = '[name=message]';
    offers_update_checkbox = "input[type='checkbox'][id^=LEGAL_CONSENT]";
    sendmessage_button_element = '[type=submit][value="SEND MESSAGE"]';

}
export default ContactPage;