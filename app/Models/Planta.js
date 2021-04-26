'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Planta extends Model {
  static get table(){
    return 'plantas'
}
comentario () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Planta
