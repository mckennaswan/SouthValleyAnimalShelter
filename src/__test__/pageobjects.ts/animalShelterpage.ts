import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "../BasePage"

export class animalShelterHome extends BasePage {
    driver: WebDriver;
    url: string = "https://www.suvas.org/";

   // Locators
   Cinder: By = By.xpath("//a[text()= '73180 Cinder']")
   dog: By = By.xpath('//*[@id="comp-jvrhjqsn"]')
   adoptTab: By = By.xpath('//*[@id="DrpDwnMn0-5s33label"]')
   cat: By = By.xpath('//*[@id="comp-jvrhkd69"]')
   lostFound: By = By.xpath('//p[@id=”DrpDwnMn0-5s32label”]')

    constructor(driver: WebDriver) {
        super(driver);
    }
}