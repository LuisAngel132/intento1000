'use strict'

const Receta = use('App/Models/Receta')

class RecetaController {
    async mostrar({request}) {
        const data = request.only(['pais'])
        return await Receta.query().where('pais',data.pais).fetch()
    }
}

module.exports = RecetaController
