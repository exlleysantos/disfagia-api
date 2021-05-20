'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Specialty extends Model {
    healthcareProfessional() {
        return this.belongsTo('App/Models/HealthCareProfessional')
    }
}

module.exports = Specialty
