import { By, WebDriver, Capabilities, Builder } from "selenium-webdriver"
import { animalShelterHome } from "./pageobjects.ts/animalShelterpage"

const chromedriver = require("chromedriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const shelter = new animalShelterHome(driver);

test("Finding new fur friend", async () => {
    await shelter.navigate(shelter.url);
    await shelter.maxWindow();
});
test("home page", async () => {
    expect(await shelter.driver.getCurrentUrl()).toBe(shelter.url);
});
test("meet the dogs", async () => {
  await shelter.click(shelter.adoptTab);
    await shelter.click(shelter.dog);
    await driver.sleep(3000);
});
//test("Cinder", async () => {
    //await driver.get("73180 Cinder");
    //await driver.sleep(5000); 
//});
test("meet the cats", async () => {
    await shelter.click(shelter.adoptTab);
    await shelter.click(shelter.cat);
    await driver.sleep(3000);
    await driver.quit();
});