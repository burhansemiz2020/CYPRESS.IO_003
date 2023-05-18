import { Homepage } from "../../pageObjectModel/homepage";
const homepagePOM=new Homepage()

import HomepageSecond from "../../pageObjectModel/homepageSecond";
describe('Page Object Model 1nci kullanimi', () => {
    it('Page object model kullanim ornekleri', () => {
        homepagePOM.navigate()
        homepagePOM.pricingBtn()
        
    });
});

describe.only('Page Object Model 2nci Kullanim', () => {
    it('Page object model kullanim ornekleri', () => {
        HomepageSecond.navigate()
        HomepageSecond.pricingBtn.should('be.visible').and('contain',"Pricing").click()
        
    });
});

