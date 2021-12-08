'use strict'

const Receta = use('App/Models/Receta')

class RecetaController {
    async mostrar({request}) {
        const data = request.only(['pais'])
        console.log(data)
        return await Receta.query().where('pais',data).fetch()

    }
}

module.exports = RecetaController
