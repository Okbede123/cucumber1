package actionpage.bankguru;

import commons.BasePage;
import interfaceUI.bankguru.LoginPageUI;
import org.openqa.selenium.WebDriver;

public class LoginPageObject extends BasePage {

    WebDriver driver;

    public LoginPageObject(WebDriver driver) {
        super(driver);
        this.driver = driver;
    }

    public void inputUserNamePass(String user, String pass){
        sendKeysToElement(LoginPageUI.INPUT_INFORMATION,user,"UserID");
        sendKeysToElement(LoginPageUI.INPUT_INFORMATION,pass,"Password");
    }

    public ManagerHomePage inputInformation(){
        sendKeysToElement(LoginPageUI.INPUT_INFORMATION,"mngr476454","UserID");
        sendKeysToElement(LoginPageUI.INPUT_INFORMATION,"YjepAtE","Password");
        return PageGeneralManager.openManagerHomePage(driver);
    }

    public RegisterPageObject clickToRegister(){
        clickToElements(LoginPageUI.CLICK_HERE_TO_REGISTER);
        if(getNameUrl().contains("#google_vignette")){
            goToURl("https://demo.guru99.com/");
        }
        return PageGeneralManager.openRegisterPage(driver);
    }

    public ManagerHomePage clickToLogin(){
        clickToElements(LoginPageUI.BUTTON_DYNAMIC,"LOGIN");
        return PageGeneralManager.openManagerHomePage(driver);
    }

}
