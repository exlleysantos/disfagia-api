'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceDataSchema extends Schema {
  up () {
    this.create('device_data', (table) => {
      table.increments()
      
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('cascade')

      table.float('sound_value', [6],[4])
      table.float('movement_value1', [6],[4])
      table.float('movement_value2', [6],[4])
      table.float('movement_value3', [6],[4])

      table.string('datetime')

      table.float('duration', [5], [3])
      table.integer('is_present').defaultTo(1)

      table.timestamps()
    })
  }

  down () {
    this.drop('device_data')
  }
}

module.exports = DeviceDataSchema
