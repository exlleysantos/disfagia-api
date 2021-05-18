'use strict'

const Address = use("App/Models/Address")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with addresses
 */
class AddressController {
  /**
   * Show a list of all addresses.
   * GET addresses
   */

  async index () {
    return Address.all();
  }

  /**
   * Create/save a new address.
   * POST addresses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store ({request, params}) {
    const data = request.only(["country","state", "city", "street"]);
    data.user_id = params.userId;

    return Address.create(data);
  }

  /**
   * Display a single address.
   * GET addresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    return Address.findOrFail(params.addressId);
  }

  /**
   * Update address details.
   * PUT or PATCH addresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const address = await Address.findOrFail(params.addressId);
    const data = request.only(["country", "state", "city", "street"]);
    
    await address.merge(data);
    await address.save();
    return address;
  }

  /**
   * Delete a address with id.
   * DELETE addresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const address = await Address.findOrFail(params.id)

    await address.delete()

    return response.send({ message: "Endereço removido" })
  }
}

module.exports = AddressController
