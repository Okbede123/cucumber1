package interfaceUI.bankguru;

public class BaseUIBankGuru {
    public static final String INPUT_INFORMATION_WITH_TD = "xpath=//td[text() = '%s']//parent::tr//td/input";

    public static final String RADIO_GENDER = "xpath=//td[text()='Gender']//parent::tr//td/input[@value='f']";
    public static final String BUTTON_TYPE = "xpath=//input[@type = '%s']";

    public static final String INFORMATION_USER_ID = "xpath=//td[text() = 'User ID :']//following-sibling::td";

    public static final String INFORMATION_USER_PASSWORD = "xpath=//td[text() = 'Password :']//following-sibling::td";
}
