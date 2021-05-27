'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DeviceDataClassified extends Model {

    deviceData() {
        return this.hasOne('App/Models/DeviceDatum')
    }

}

module.exports = DeviceDataClassified
