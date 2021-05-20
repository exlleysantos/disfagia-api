'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const usersArray = await Factory
    .model('App/Models/User')
    .createMany(2)

    const medicalRecord = await Factory.model('App/Models/MedicalRecord').make()
    const address = await Factory.model('App/Models/Address').make()
    const user = await User.find(usersArray[0].id)

    user.adresses().save(address)
    user.medicalRecords().save(medicalRecord)
  }
}

module.exports = UserSeeder
