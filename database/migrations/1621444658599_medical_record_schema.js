'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicalRecordSchema extends Schema {
  up () {
    this.create('medical_records', (table) => {
      table.increments()
      table.integer('height')
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')

      table.timestamps()
    })
  }

  down () {
    this.drop('medical_records')
  }
}

module.exports = MedicalRecordSchema
