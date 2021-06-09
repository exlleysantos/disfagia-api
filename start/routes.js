'use strict'

const ConsultationController = require('../app/Controllers/Http/ConsultationController');
const DiseaseController = require('../app/Controllers/Http/DiseaseController');

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

//session routes
Route.post('/login', 'AuthController.store');
Route.get('/login', 'AuthController.show');

//healthcare professional
Route.post('/healthcare-professionals', 'HealthcareProfessionalController.store');
Route.get('/healthcare-professionals/:id', 'HealthcareProfessionalController.show');

//Address routes
Route.get('/adresses', 'AddressController.index');
Route.get('/adresses/:addressId', 'AddressController.show');
Route.delete('/adresses/:addressId', 'AddressController.destroy');
Route.put('/adresses/:addressId', 'AddressController.update');
Route.post('/users/:userId/adresses', 'AddressController.store');

//consultation
Route.get('/consultations', 'ConsultationController.index');
Route.post('/consultations', 'ConsultationController.store');

//Diseases
Route.get('/diseases', 'DiseaseController.index');
Route.post('/diseases', 'DiseaseController.store');

//MedicalRecords
Route.get('/medicalRecords', 'MedicalRecordController.index');
Route.post('users/:userId/medicalRecords', 'MedicalRecordController.store');

//Eat10
Route.get('/eat10s', 'Eat10Controller.index');
Route.post('/eat10s', 'Eat10Controller.store');

//Gnas
Route.get('/gnas', 'GlobalNutritionalAssessmentController.index');
Route.post('/gnas', 'GlobalNutritionalAssessmentController.store');


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
