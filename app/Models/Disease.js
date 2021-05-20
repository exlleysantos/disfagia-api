'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disease extends Model {

    users () {
        return this.belongsToMany('App/Models/Users','user_id','disease_id','id','id')
    }

}

module.exports = Disease
