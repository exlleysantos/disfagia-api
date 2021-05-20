'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultationSchema extends Schema {
  up () {
    this.create('consultations', (table) => {
      table.increments()

      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')

      table.integer('medical_id')
      .unsigned()
      .references('id')
      .inTable('healthcare_professionals')

      table.string('observation', 500)

      table.timestamps()
    })
  }

  down () {
    this.drop('consultations')
  }
}

module.exports = ConsultationSchema
