'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HealthcareProfessionalSchema extends Schema {
  up () {
    this.create('healthcare_professionals', (table) => {
      table.increments()
      table.string('name')
      table.string('email', 254).notNullable().unique()
      table.string('password')

      table.integer('specialty_id')
      .unsigned()
      .references('id')
      .inTable('specialties')

      table.timestamps()
    })
  }

  down () {
    this.drop('healthcare_professionals')
  }
}

module.exports = HealthcareProfessionalSchema
