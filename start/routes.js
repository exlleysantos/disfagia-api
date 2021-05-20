'use strict'

const ConsultationController = require('../app/Controllers/Http/ConsultationController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('/users', 'UserController').apiOnly();
//Route.get('/users/:id/patients', 'ConsultationController.indexPatients');

Route.post('/healthcare-professionals', 'HealthcareProfessionalController.store');
Route.get('/healthcare-professionals/:id', 'HealthcareProfessionalController.show');
//session routes
Route.post('/login', 'AuthController.store');
Route.get('/login', 'AuthController.show');
//Address routes

//consultation
Route.post('/consultations', 'ConsultationController.store');
Route.get('/adresses', 'AddressController.index');
Route.get('/adresses/:addressId', 'AddressController.show');
Route.delete('/adresses/:addressId', 'AddressController.destroy');
Route.put('/adresses/:addressId', 'AddressController.update');
Route.post('/users/:userId/adresses', 'AddressController.store');

Route.post('/diseases', 'DiseaseController.store');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
