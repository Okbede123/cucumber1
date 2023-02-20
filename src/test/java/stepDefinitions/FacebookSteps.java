package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class FacebookSteps {
    WebDriver driver;


//    @Given("^Open facebook application$")
    @Before
    public void openFacebookApplication()  {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("https://www.facebook.com/");
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

    }

    @And("^Click to Submit button$")
    public void clickToSubmitButton() {
        driver.findElement(By.tagName("button")).click();
    }

    @Then("^Verify email textbox is displayed$")
    public void verifyEmailTextboxIsDisplayed() {
        Assert.assertTrue(driver.findElement(By.id("email")).isDisplayed());
    }

    @Then("^Verify password textbox is displayed$")
    public void verifyPasswordTextboxIsDisplayed()  {
        Assert.assertTrue(driver.findElement(By.id("pass")).isDisplayed());
    }

    @After
    public void closeApplication() {
        driver.quit();
    }

    @When("^Input to Username textbox$")
    public void inputToUsernameTextbox() {
        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("email")).sendKeys("test");
    }

    @And("^Input to Password textbox$")
    public void inputToPasswordTextbox() {
        driver.findElement(By.id("pass")).clear();
        driver.findElement(By.id("pass")).sendKeys("123");
    }



    @When("^Input to Username textbox with \"([^\"]*)\"$")
    public void inputToUsernameTextboxWith(String userName)  {
        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("email")).sendKeys(userName);
    }

    @And("^Input to Password textbox with \"([^\"]*)\"$")
    public void inputToPasswordTextboxWith(String password) {
        driver.findElement(By.id("pass")).clear();
        driver.findElement(By.id("pass")).sendKeys(password);
    }

    @When("^Input to Username textbox with ([^\"]*)$")
    public void inputToUsernameTextbox(String userName)  {
        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("email")).sendKeys(userName);
    }

    @And("^Input to Password textbox with ([^\"]*)$")
    public void inputToPasswordTextbox(String password) {
        driver.findElement(By.id("pass")).clear();
        driver.findElement(By.id("pass")).sendKeys(password);
    }



    @When("^Input to Username with \"([^\"]*)\" And Input to Password with \"([^\"]*)\"$")
    public void inputToUsernameWithAndInputToPasswordWith(String email, String password)  {
        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("email")).sendKeys(email);
        driver.findElement(By.id("pass")).clear();
        driver.findElement(By.id("pass")).sendKeys(password);
    }

    @When("^Input to Username And Password$")
    public void inputToUsernameAndPassword(DataTable dataTable) {
        List<Map<String,String>> dataMap = dataTable.asMaps(String.class, String.class);

        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("email")).sendKeys(dataMap.get(0).get("User_name"));
        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("pass")).sendKeys(dataMap.get(0).get("Password"));
    }



    @When("^Input to Username And Password step$")
    public void inputToUsernameAndPasswordStep(DataTable table) {
        for(Map<String,String> test: table.asMaps(String.class, String.class)){
            driver.findElement(By.id("email")).clear();
            driver.findElement(By.id("email")).sendKeys(test.get("User_name"));
            driver.findElement(By.id("email")).clear();
            driver.findElement(By.id("pass")).sendKeys(test.get("Pass_word"));
        }
    }

    @Then("^Verify list data$")
    public void verifyListData(DataTable table) {
        List<Map<String,String>> dataMap = table.asMaps(String.class, String.class);
        System.out.println("table " + dataMap.size());
    }



}
