package stepDefinitions.bankguru;

import actionpage.bankguru.CommonPageObject;
import actionpage.bankguru.PageGeneralManager;
import commons.DataHelper;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumberOptions.Hooks;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class CommonPageSteps {

    WebDriver driver;
    CommonPageObject commonPageObject;
    String phoneNumber;
    String email;

    public CommonPageSteps(){
        driver = Hooks.openAndQuitBrowser();
        commonPageObject = PageGeneralManager.openCommonPage(driver);
        phoneNumber = DataHelper.getNumber(10);
        email = DataHelper.getEmail();
    }


    @And("^I input to \"([^\"]*)\" with value \"([^\"]*)\"$")
    public void iInputToWithValue(String fileName, String value) {
        if(fileName.equals("Mobile Number")){
            value = phoneNumber;
        }
        if(fileName.equals("E-mail")){
            value = email;
        }
        commonPageObject.inputInformationCustomer(value,fileName);
    }

    @And("^In input to Address with value \"([^\"]*)\"$")
    public void inInputToWithValue(String value) {
        commonPageObject.inputInformationAddressCustomer(value);
    }

    @And("^Click to \"([^\"]*)\" button$")
    public void clickToButton(String button) {
        commonPageObject.clickToButtonCreateCustomer(button);
    }

    @And("^I click to Gender radio with value \"([^\"]*)\"$")
    public void iClickToRadioWithValue(String value) {
        commonPageObject.clickRadioGender(value);
    }

    @Then("^Verify Success message displayed with \"([^\"]*)\"$")
    public void verifySuccessMessageDisplayedWith(String value) {
        Assert.assertEquals(commonPageObject.getTextVerifyCustomerTitle(),value);
    }

    @And("^displayed value at \"([^\"]*)\" with \"([^\"]*)\"$")
    public void displayedValueAtWith(String field, String value) {
        if(field.equals("Mobile No.")){
            value = phoneNumber;
        }
        if(field.equals("Email")){
            value = email;
        }
        Assert.assertEquals(commonPageObject.getTextVerifyField(field),value);
    }
}
