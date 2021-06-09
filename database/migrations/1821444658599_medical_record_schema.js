'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicalRecordSchema extends Schema {
  up () {
    this.create('medical_records', (table) => {
      table.increments()
      
      table.integer('height')

      table.enu('sex', ['male', 'female'])
      
      table.enu('physical_type', ['brevilineo', 'normolineo', 'longilineo'])
      
      table.float('current_weight', [6], [3])
      table.float('usual_weight', [6], [3])
      table.float('ideal_weight', [6], [3])

      table.float('usual_weight_percentage', [6], [3])
      table.float('ideal_weight_percentage', [6], [3])
      table.float('loss_weight_percentage', [6], [3])

      table.float('bmi')
      
      table.integer('knee_height')
      table.integer('arm_circumference')
      table.integer('calf_circumference')
      table.integer('waist_circumference')

      table.enu('depletion', ['mild', 'moderate', 'severe'])

      table.float('basal_energy_spend', [6], [3])
      table.float('total_energy_expenditure', [6], [3])

      table.enu('dentition', ['absent', 'present', 'prosthesis'])

      table.integer('work_hours')
      table.boolean('has_allergy')
      table.boolean('alcohol')
      table.boolean('tobacco')

      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('medical_records')
  }
}

module.exports = MedicalRecordSchema
