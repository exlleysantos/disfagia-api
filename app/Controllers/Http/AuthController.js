'use strict'
const User = use("App/Models/User");

class AuthController {

    async auth({request, auth, response}){
        const { email, password } = request.only(['email', 'password']);

        const user = User.findBy('email', email);

        if (!user) {
            return response.status(404).json({message: 'User Not Found'});
        }
  
        const token = await auth.attempt(email, password);
  
        return response.status(200).json({user, token});
		
    }
}

module.exports = AuthController
