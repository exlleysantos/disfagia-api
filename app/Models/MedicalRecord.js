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

    eat10() {
        return this.hasOne('App/Models/Eat10')
    }

    gna() {
        return this.hasOne('App/Models/GlobalNutritionalAssessment')
    }
}

module.exports = MedicalRecord
