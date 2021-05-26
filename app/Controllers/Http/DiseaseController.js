'use strict'
const Disease = use('App/Models/Disease')
const User = use('App/Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with diseases
 */
class DiseaseController {
  /**
   * Show a list of all diseases.
   * GET diseases
   *
   * @param {object} ctx
   */
  async index () {
    const diseases = Disease.all()
    return diseases;
  }

  /**
   * Create/save a new disease.
   * POST diseases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store ({ request }) {
    const data = request.only(['name']);
    
    return Disease.create(data);

  }

  /**
   * Update disease details.
   * PUT or PATCH diseases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a disease with id.
   * DELETE diseases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DiseaseController
