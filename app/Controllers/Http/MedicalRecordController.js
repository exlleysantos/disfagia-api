'use strict'
const MedicalRecord = use("App/Models/MedicalRecord")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with medicalrecords
 */
 const getFields = (request) =>
 request.only([
     'height',
     'sex',
     'physical_type',
     'current_weight',
     'usual_weight',
     'ideal_weight',
     'usual_weight_percentage',
     'ideal_weight_percentage',
     'loss_weight_percentage',
     'bmi',
     'knee_height',
     'arm_circumference',
     'calf_circumference',
     'waist_circumference',
     'depletion',
     'basal_energy_spend',
     'total_energy_expenditure',
     'dentition',
     'work_hours',
     'has_allergy',
     'alcohol',
     'tobacco',
     'eat10_id',
     'gna_id',
 ]);

class MedicalRecordController {
  /**
   * Show a list of all medicalrecords.
   * GET medicalrecords
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    return MedicalRecord.query().with('eat10').with('gna').fetch();
  }

  /**
   * Create/save a new medicalrecord.
   * POST medicalrecords
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, params }) {
    const data = getFields(request);
    const user_id = params.userId;

    const medicalRecord = await MedicalRecord.create({user_id, ...data})

    return medicalRecord;
  }

  /**
   * Update medicalrecord details.
   * PUT or PATCH medicalrecords/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a medicalrecord with id.
   * DELETE medicalrecords/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MedicalRecordController
