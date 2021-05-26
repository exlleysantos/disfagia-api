'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Eat10Schema extends Schema {
  up () {
    this.create('eat_10_s', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('eat_10_s')
  }
}

module.exports = Eat10Schema
