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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/Post', 'PostController.index');
Route.post('/Post', 'PostController.create');
Route.put('/Post/:id', 'PostController.update');
Route.delete('/Post/:id', 'PostController.excluir');

Route.post('/user', 'UserController.store');
Route.post('/login', 'UserController.login');
Route.get('/user', 'UserController.index').middleware('auth');

