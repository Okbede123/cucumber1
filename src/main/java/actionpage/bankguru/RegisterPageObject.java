package actionpage.bankguru;

import commons.BasePage;
import commons.GlobalConstant;
import interfaceUI.bankguru.BaseUIBankGuru;
import interfaceUI.bankguru.RegisterPageUI;
import org.openqa.selenium.WebDriver;

public class RegisterPageObject extends BasePage {

    WebDriver driver;
    public RegisterPageObject(WebDriver driver) {
        super(driver);
        this.driver = driver;
    }

    public void inputToDynamicByName(String value,String locatorDynamic){
        sendKeysToElement(RegisterPageUI.DYNAMIC_BY_NAME,value,locatorDynamic);
    }

    public void clickToDynamicByName(String elementLocator){
        clickToElements(RegisterPageUI.DYNAMIC_BY_NAME,elementLocator);
    }

    public String getUser(){
        return getText(BaseUIBankGuru.INFORMATION_USER_ID);
    }

    public String getPassword(){
        return getText(BaseUIBankGuru.INFORMATION_USER_PASSWORD);
    }
}
