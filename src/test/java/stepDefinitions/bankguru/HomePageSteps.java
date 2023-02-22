package stepDefinitions.bankguru;

import actionpage.bankguru.CommonPageObject;
import actionpage.bankguru.ManagerHomePage;
import actionpage.bankguru.PageGeneralManager;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumberOptions.Hooks;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class HomePageSteps {

    WebDriver driver;
    ManagerHomePage managerHomePage;
    public HomePageSteps(){
        this.driver = Hooks.openAndQuitBrowser();
        managerHomePage = PageGeneralManager.openManagerHomePage(driver);
    }



    @Then("^Home page displayed$")
    public void homePageDisplayed() {
        Assert.assertTrue(managerHomePage.isDisplayWelcomeManager());
    }

    @Given("^click to Add \"([^\"]*)\"$")
    public CommonPageObject clickToAdd(String newCustomer)  {
        managerHomePage.clickToNewCustomer(newCustomer);
        return PageGeneralManager.openCommonPage(driver);
    }
}
