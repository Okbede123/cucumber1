package stepDefinitions.bankguru;

import actionpage.bankguru.LoginPageObject;
import actionpage.bankguru.ManagerHomePage;
import actionpage.bankguru.PageGeneralManager;
import actionpage.bankguru.RegisterPageObject;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumberOptions.Hooks;
import org.openqa.selenium.WebDriver;

public class LoginPageSteps {

    WebDriver driver;
    static String loginPageUrl;
    LoginPageObject loginPageObject;
    RegisterPageObject registerPageObject;
    ManagerHomePage managerHomePage;

    public LoginPageSteps(){
        this.driver = Hooks.openAndQuitBrowser();
        loginPageObject = PageGeneralManager.openLoginPage(driver);
    }

    @Given("^Open register open$")
    public void openRegisterOpen() {
       registerPageObject = loginPageObject.clickToRegister();

    }

    @And("^Submit valid info to login userId and password$")
    public void submitValidInfoToLogin() {
        loginPageObject.inputUserNamePass(RegisterPageSteps.userName,RegisterPageSteps.password);
        managerHomePage = loginPageObject.clickToLogin();
    }

    @Given("^get login page url \"([^\"]*)\"$")
    public void getLoginPageUrl(String url) {
        loginPageUrl = url;
    }


}
