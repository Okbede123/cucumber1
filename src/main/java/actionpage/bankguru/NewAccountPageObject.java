package actionpage.bankguru;

import interfaceUI.bankguru.BaseUIBankGuru;
import interfaceUI.bankguru.NewAccountPageUI;
import org.openqa.selenium.WebDriver;
import commons.BasePage;

public class NewAccountPageObject extends MenuSubNavigation {
    WebDriver driver;
    public NewAccountPageObject(WebDriver driver) {
        super(driver);
        this.driver = driver;
    }

    public void inputAddNewAccountForm(String idCustomer,String accountType,String valueInitialDeposit){
        sendKeysToElement(BaseUIBankGuru.INPUT_INFORMATION_WITH_TD,idCustomer,"Customer id");
        selectItem(NewAccountPageUI.SELECT_ACCOUNT_TYPE,accountType);
        sendKeysToElement(NewAccountPageUI.INITIAL_DEPOSIT,valueInitialDeposit);
        clickToElements(BaseUIBankGuru.BUTTON_TYPE,"submit");
    }
    public String getTextTitleEditSuccessfully(){
       return getText(NewAccountPageUI.TITLE_ADD_NEW_ACCOUNT_SUCCESSFULLY);
    }
    public String getTextAccountSuccessfully(String valueField){
        return getText(NewAccountPageUI.GETTEXT_CREATE_SUCCSESSFULLY,valueField);
    }
}

