'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class HealthcareProfessional extends Model {

    specialty () {
        return this.hasOne('App/Models/Specialty')
    }
}

module.exports = HealthcareProfessional
