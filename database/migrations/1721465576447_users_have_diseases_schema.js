'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersHaveDiseasesSchema extends Schema {
  up () {
    this.create('users_have_diseases', (table) => {
      table.increments()

      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')

      table.integer('disease_id')
      .unsigned()
      .references('id')
      .inTable('diseases')
      
      table.timestamps()
    })
  }

  down () {
    this.drop('users_have_diseases')
  }
}

module.exports = UsersHaveDiseasesSchema
