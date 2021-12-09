'use strict'

const Receta = require('../../app/Models/Receta')

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const RecetaSeeder = use('RecetaSeeder')
class DatabaseSeeder {
  async run () {
    await Receta.run()
  }
}

module.exports = DatabaseSeeder
