'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/login','AuthController.login')
Route.post('/register','UserController.store')

Route.post('/recetas','RecetaController.mostrar')
Route.get('/check','UserController.check')

Route.get('/logout','AuthController.logout')

Route.group(()=>{
Route.post('/update/user','UserController.actualizar')
}).middleware('auth');
