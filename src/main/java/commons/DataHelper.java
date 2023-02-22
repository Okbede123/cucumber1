package commons;

import com.github.javafaker.Faker;

import java.util.Locale;

public class DataHelper {

    private static Locale locale = new Locale("en");
    private static Faker faker = new Faker(locale);

    public static DataHelper getData(){
        return  new DataHelper();
    }

    public static String getEmail(){
        return faker.internet().emailAddress();
    }

    public static String getNumber(int length){
        return faker.phoneNumber().subscriberNumber(length);
    }
}
