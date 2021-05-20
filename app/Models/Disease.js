'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disease extends Model {

    users () {
        return this.belongsToMany('App/Models/Users').pivotTable('user_disease')
    }

}

module.exports = Disease
