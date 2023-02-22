package actionpage.bankguru;

import commons.BasePage;
import interfaceUI.bankguru.BaseUIBankGuru;
import interfaceUI.bankguru.NewCustomerPageUI;
import org.openqa.selenium.WebDriver;

public class CommonPageObject extends BasePage {

    WebDriver driver;

    public CommonPageObject(WebDriver driver) {
        super(driver);
        this.driver = driver;
    }

    public void inputInformationCustomer(String valueToSend, String typeValue){

        if(getAttribute(BaseUIBankGuru.INPUT_INFORMATION_WITH_TD,"type","Date of Birth").contains("date")){
            removeAttribute(BaseUIBankGuru.INPUT_INFORMATION_WITH_TD,"type","Date of Birth");
        }
        sendKeysToElement(BaseUIBankGuru.INPUT_INFORMATION_WITH_TD,valueToSend,typeValue);
    }

    public void inputInformationAddressCustomer(String valueToSend){
        sendKeysToElement(NewCustomerPageUI.INPUT_ADDRESS,valueToSend);
    }

    public void clickToButtonCreateCustomer(String typeValue){
        clickToElements(BaseUIBankGuru.BUTTON_TYPE,typeValue);
    }

    public void clickRadioGender(String value){
        clickToElements(BaseUIBankGuru.RADIO_GENDER,value);
    }


    public String getTextVerifyCustomerTitle(){
        return getText(NewCustomerPageUI.VERIFY_CREATE_CUSTOMER_SUCCESSFULLY);
    }

    public String getTextVerifyField(String field){
        return getText(NewCustomerPageUI.VERIFY_FIELD,field);
    }
}
