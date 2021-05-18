'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments().primary()
      table.string('country')
      table.string('state')
      table.string('city')
      table.string('street')
      
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')

      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
