'use strict'
const User = use ('App/Models/User')
const Database = use('Database')
const Helpers = use('Helpers')

class UserController {
async store({request,response})
{

    const userData = request.only(['nombre','email','password'])
    const user = await User.create(userData)

    return response.created({
        status : true,
        data : user
    })

}
async Miperfil({response,auth}){
  return response.send([await Database
  .table('users')
  .where('id', auth.user.id)
  .first()])


}
async Foto({response}){
  
      return response.status(200).send({
        res: true,
        message: "Foto registrada correctamente!"
      })
    }

    async Delete({response,auth}){
      const directorio = await User.findOrFail(auth.user.id);
     directorio.url_foto =null
     await directorio.save();

          return response.json(
              {
                 rer:true,
                 message:"registro eliminado correctamente"
              }
          )

  }
  }

module.exports = UserController
