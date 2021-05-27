'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceDataClassifiedSchema extends Schema {
  up () {
    this.create('device_data_classifieds', (table) => {
      table.increments()

      table.integer('device_data_id')
      .unsigned()
      .references('id')
      .inTable('device_data')
      .onDelete('cascade')

      table.enu('dysphagia_level', ['N1_N2', 'N2_N3', 'N3_N4', 'N4_N5', 'N5_N6', 'N6_N7', 'NOT_CLASSIFIED']).defaultTo('NOT_CLASSIFIED')
      table.enu('type_food', ['LIQUID', 'PASTY', 'SOLID', 'NOT_CLASSIFIED']).defaultTo('NOT_CLASSIFIED')

      table.string('datetime')

      table.float('duration', [5], [3])

      table.string('indicated_foods')
      table.string('consistency_foods')

      table.enu('has_obstruction', ['YES', 'NOT', 'NOT_CLASSIFIED']).defaultTo('NOT_CLASSIFIED')

      table.timestamps()
    })
  }

  down () {
    this.drop('device_data_classifieds')
  }
}

module.exports = DeviceDataClassifiedSchema
