'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GlobalNutritionalAssessmentSchema extends Schema {
  up () {
    this.create('global_nutritional_assessments', (table) => {
      table.increments()

      table.integer('medical_record_id')
      .unsigned()
      .references('id')
      .inTable('medical_records')
      .index('medical_record_id')
      .onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('global_nutritional_assessments')
  }
}

module.exports = GlobalNutritionalAssessmentSchema
