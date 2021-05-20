'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserDiseaseSchema extends Schema {
  up () {
    this.create('user_disease', (table) => {
      table.increments()

      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      .index('user_id')

      table.integer('disease_id')
      .unsigned()
      .references('id')
      .inTable('diseases')
      .onDelete('cascade')
      .index('disease_id')

      table.timestamps()
    })
  }

  down () {
    this.drop('user_disease')
  }
}

module.exports = UserDiseaseSchema
