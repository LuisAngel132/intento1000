'use strict'
const User = use ('App/Models/User')
const Database = use('Database')
const Helpers = use('Helpers')

class UserController {
  async check({auth,response}){
    try {
      await auth.check()
      const user = await auth.getUser()
      return response.status(200).json({user:user})
    } catch (error) {
      response.status(400).send("token invalido")
    }
  }

  async actualizar({auth,response,request}){
    const data = await request.only(['nombre','email'])
    const user = await auth.getUser()
/*     console.log(user.id)

    User.query().where('email',data.email).first()
 */   
    const user_email_repeat = await User.query().where('email',data.email).where('id','<>',user.id).first()

    if(user_email_repeat){
      return response.status(400).send("correo ya registrado")
    }

    if(!data.nombre == ""){
      console.log("nombre vacio")
      user.nombre = data.nombre
    }

    if(!data.email == ""){
      console.log(" email vacio ")
      user.email = data.email
    }

    await user.save()

    return response.status(200).json({message:"se acualizo correctamente", user:user})
    
  }



async store({request,response})
{

    const userData = request.only(['nombre','email','password'])
    
    const email_repeat = await User.query().where('email',userData.email).first()
    if(email_repeat){
      return response.status(400).send("Email ya registrado")
    }

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
