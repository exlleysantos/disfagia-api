'use strict'

/*
|--------------------------------------------------------------------------
| HealthcareProfessionalSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class HealthcareProfessionalSeeder {
  async run () {
    const usersArray = await Factory
    .model('App/Models/HealthcareProfessional')
    .createMany(5)
  }
}

module.exports = HealthcareProfessionalSeeder
