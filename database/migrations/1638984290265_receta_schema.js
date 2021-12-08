'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecetaSchema extends Schema {
  up () {
    this.create('recetas', (table) => {
      table.increments()
      table.string('nombre', 200).unique()
      table.text('ingredientes1')
      table.text('ingredientes2')
      table.text('preparacion')
      table.string('img')
      table.text('pais')
      table.timestamps()
    })
  }

  down () {
    this.drop('recetas')
  }
}

module.exports = RecetaSchema
