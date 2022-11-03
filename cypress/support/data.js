import { faker } from "@faker-js/faker";

// Setup Faker to use English/United States
faker.locale = "de";

class Data {
  // Faker initialization
  faker = faker;

  // Device in which view we are running our tests
  device = "macbook-15";

  // User variables
  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
  email = faker.internet.email();
  address = faker.address.streetAddress();
  newAddress = faker.address.streetAddress();
  phoneNumber = faker.phone.number("+1 91 ### ## ##");
  password = "Pass123#";
  city = "Montgomery";
  zipCode = "36094";
  registeredEmail = "qa.test@something.qa";
  registeredPassword = "P@ss01133";
}

export default new Data();
