'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class HealthcareProfessional extends Model {

    static boot () {
        super.boot()
    
        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (userInstance) => {
          if (userInstance.dirty.password) {
            userInstance.password = await Hash.make(userInstance.password)
          }
        })
      }
      static get hidden () {
        return ['password']
      }
      
      tokens () {
        return this.hasMany('App/Models/Token')
      }
      consultation () {
        return this.belongsToMany('App/Models/Consultation')
      }
      patients () {
        return this.belongsToMany('App/Models/User').pivotTable('consultations')
      }
      specialty () {
        return this.hasOne('App/Models/Specialty')
    }
}

module.exports = HealthcareProfessional
