'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().primary()
      table.string('fullname', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('cpf', 12)
      table.date('birthdate').notNullable()
      table.enu('sex', ['male', 'female'])
      table.enu('type', ['patient', 'nutritionist', 'speech_therapist', 'nurse']).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
