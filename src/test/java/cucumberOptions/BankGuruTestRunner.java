package cucumberOptions;


import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features/bankguru",
        glue = "stepDefinitions.bankguru",
        monochrome = true,
        plugin = {"pretty","html:target/site/cucumber-report-default","json:target/site/cucumber_bankguru.json"},
        snippets = SnippetType.CAMELCASE,
        tags = {"@createUserAndCustomer"})

public class BankGuruTestRunner {
}
