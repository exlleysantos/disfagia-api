'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DeviceDatum extends Model {

    classified() {
        return this.belongsTo('App/Models/DeviceDataClassified')
    }
}

module.exports = DeviceDatum
