'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Eat10 extends Model {
    
    medicalRecord() {
        return this.belongsTo('App/Models/MedicalRecord')
    }
}

module.exports = Eat10
