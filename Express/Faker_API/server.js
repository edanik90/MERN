const faker = require('faker');
const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

class User {
    constructor() {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    return res.status(201).json({ newUser:newUser });
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    return res.status(201).json({ newCompany:newCompany });
});

app.get("/api/user/company", (req, res) => {
    const newCompany = new Company();
    const newUser = new User();
    return res.status(201).json({ newUser: newUser, newCompany:newCompany });
});