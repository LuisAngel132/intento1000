'use strict'
const Database = use('Database')
const User = use ('App/Models/User')

class AuthController {
    async login ({request,response,auth})
    {
        const {email,password} = request.only(['email','password'])
        const token = await auth.attempt(email,password)
        const user = await User.query().where('email',email).first()

        return response.status(200).json({
            user:user,
            token
        });
    }

    async logout ({response,auth})
    {
            await auth.logout()
            return response.status(200).json({
                data: "eliminado"
            })
    }
}

module.exports = AuthController
