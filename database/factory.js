'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
   return {
     fullname: faker.string(),
     email: faker.email(),
     password: faker.string(),
     birthdate: faker.date()

   }
});

Factory.blueprint('App/Models/Address', (faker) => {
    return {
        country: faker.string(),
        state: faker.string(2),
        city: faker.string(20),
        street: faker.string(50)
    }
});

Factory.blueprint('App/Models/MedicalRecord', (faker) =>{
    return {
        height: faker.integer({ min: 1, max: 230 })
    }
});
/*
Factory.blueprint('App/Models/Disease', (faker) => {
    return {
        name: faker.string()
    }
})
*/
Factory.blueprint('App/Models/HealthcareProfessional', (faker) => {
    return {
        name: faker.string(),
        email: faker.email(),
        password: faker.password()
    }
});
