'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MedicalRecord extends Model {

    static boot () {
        super.boot()
    
        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (medicalRecordInstance) => {
          if (medicalRecordInstance.height) {
            if(medicalRecordInstance.physical_type){
                if(medicalRecordInstance.physical_type  === 'brevilineo'){
                    if(medicalRecordInstance.sex === 'male'){
                        medicalRecordInstance.ideal_weight = medicalRecordInstance.height - 100;
                    }
                    if(medicalRecordInstance.sex === 'female'){
                        medicalRecordInstance.ideal_weight = (medicalRecordInstance.height - 100) * 0.95;
                    }
                }

                if(medicalRecordInstance.physical_type === 'normolineo'){
                    if(medicalRecordInstance.sex === 'male'){
                        medicalRecordInstance.ideal_weight = (medicalRecordInstance.height - 100) * 0.95;
                    }
                    if(medicalRecordInstance.sex === 'female'){
                        medicalRecordInstance.ideal_weight = (medicalRecordInstance.height - 100) * 0.90;
                    }
                }

                if(medicalRecordInstance.physical_type === 'longilineo'){
                    if(medicalRecordInstance.sex === 'male'){
                        medicalRecordInstance.ideal_weight = (medicalRecordInstance.height - 100) * 0.90;
                    }
                    if(medicalRecordInstance.sex === 'female'){
                        medicalRecordInstance.ideal_weight = (medicalRecordInstance.height - 100) * 0.85;
                    }
                }
            }

            if(medicalRecordInstance.current_weight){
                medicalRecordInstance.bmi = await medicalRecordInstance.current_weight / ((medicalRecordInstance.height/100) * (medicalRecordInstance.height/100))
            }
        }
        })
    } 
    

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
