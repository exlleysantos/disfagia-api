'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MedicalRecord extends Model {

    user () {
        return this.belongsTo('App/Models/User')
    }

    diseases () {
        return this.hasMany('App/Models/Disease')
      }
}

module.exports = MedicalRecord
