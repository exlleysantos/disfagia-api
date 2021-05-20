'use strict'

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

Route.post('/login', 'AuthController.auth');
//Address routes
Route.get('/adresses', 'AddressController.index');
Route.get('/adresses/:addressId', 'AddressController.show');
Route.delete('/adresses/:addressId', 'AddressController.destroy');
Route.put('/adresses/:addressId', 'AddressController.update');
Route.post('/users/:userId/adresses', 'AddressController.store');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
