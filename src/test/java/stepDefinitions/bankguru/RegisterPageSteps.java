package stepDefinitions.bankguru;

import actionpage.bankguru.PageGeneralManager;
import actionpage.bankguru.RegisterPageObject;
import commons.DataHelper;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.openqa.selenium.WebDriver;

public class RegisterPageSteps {

    RegisterPageObject registerPageObject;
    DataHelper dataHelper;


     static String userName,password;

    WebDriver driver;

    public RegisterPageSteps(){
        this.driver = Hooks.openAndQuitBrowser();
        registerPageObject = PageGeneralManager.openRegisterPage(driver);
        dataHelper = DataHelper.getData();
    }


    @And("^Input to email textbox with locator name \"([^\"]*)\"$")
    public void inputToEmailTextbox(String elementLocator) {
        registerPageObject.inputToDynamicByName(dataHelper.getEmail(),elementLocator);
    }

    @And("^Click to \"([^\"]*)\"$")
    public void clickToSubmit(String elementLocator) {
        registerPageObject.clickToDynamicByName(elementLocator);
    }

    @Then("^Get User and Password info$")
    public void getUserAndPasswordInfo() {
        userName = registerPageObject.getUser();
        password = registerPageObject.getPassword();

    }

    @When("^Back to Login page$")
    public void backToLoginPage() {
        registerPageObject.goToURl(LoginPageSteps.loginPageUrl);
    }

}
