'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Notification extends Model {

    professionalHealthcare () {
        return this.belongsTo('App/Models/HealthcareProfessional')
    }

    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Notification
