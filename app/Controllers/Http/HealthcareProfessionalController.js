'use strict'
const HealthcareProfessional = use('App/Models/HealthcareProfessional')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with healthcareprofessionals
 */
class HealthcareProfessionalController {
  /**
   * Show a list of all healthcareprofessionals.
   * GET healthcareprofessionals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    return HealthcareProfessional.all()
  }

  /**
   * Render a form to be used for creating a new healthcareprofessional.
   * GET healthcareprofessionals/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new healthcareprofessional.
   * POST healthcareprofessionals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(["name", "email", "password"])

    return HealthcareProfessional.create(data);
  }

  /**
   * Display a single healthcareprofessional.
   * GET healthcareprofessionals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const professional = await HealthcareProfessional.findOrFail(params.id);
    await professional.load('patients');
    return professional;
  }

  /**
   * Render a form to update an existing healthcareprofessional.
   * GET healthcareprofessionals/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update healthcareprofessional details.
   * PUT or PATCH healthcareprofessionals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a healthcareprofessional with id.
   * DELETE healthcareprofessionals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = HealthcareProfessionalController
