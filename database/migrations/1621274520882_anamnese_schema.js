'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnamneseSchema extends Schema {
  up () {
    this.create('anamnese', (table) => {
      table.increments().primary()
      table.timestamps()
    })
  }

  down () {
    this.drop('anamnese')
  }
}

module.exports = AnamneseSchema
