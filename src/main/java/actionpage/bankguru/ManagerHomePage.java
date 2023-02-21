package actionpage.bankguru;

import interfaceUI.bankguru.ManagerHomePageUI;
import org.openqa.selenium.WebDriver;

public class ManagerHomePage extends MenuSubNavigation {

    WebDriver driver;

    public ManagerHomePage(WebDriver driver) {
        super(driver);
        this.driver = driver;
    }

    public NewCustomerPageObject clickToNewCustomer(String menuSubLocator){
        clickToElements(ManagerHomePageUI.MENUSUBNAV,menuSubLocator);
        return PageGeneralManager.openNewCustomerPage(driver);
    }

    public boolean isDisplayWelcomeManager(){
        return isElementDisplayed(ManagerHomePageUI.WELCOME_MANAGER);
    }
}
