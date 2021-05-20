'use strict'

const Consultation = use('App/Models/Consultation');
const User = use('App/Models/User');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with consultations
 */
class ConsultationController {
  /**
   * Show a list of all consultations.
   * GET consultations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    return Contultation.all();
  }

  async store ({ request, response, auth }) {
    const data = request.only(['observation', 'user_id', 'healthcare_professional_id' ])
    //healthcare_professional_id = auth.getUser()
    return Consultation.create(data)
  }

  /**
   * Display a single consultation.
   * GET consultations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {

  }

  /**
   * Render a form to update an existing consultation.
   * GET consultations/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update consultation details.
   * PUT or PATCH consultations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a consultation with id.
   * DELETE consultations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ConsultationController
