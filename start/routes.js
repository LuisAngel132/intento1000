'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/login','AuthController.login')
Route.post('/users','UserController.store')
Route.get('/perfil','UserController.Foto')

Route.group(()=>{
Route.get('/perfil','UserController.Miperfil')
Route.delete('/perfil','UserController.Delete')
Route.delete('/logout','AuthController.logout')
}).middleware('auth');
