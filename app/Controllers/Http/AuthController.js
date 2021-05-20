'use strict'
const HealthcareProfessional = use("App/Models/HealthcareProfessional");
const Token = use('App/Models/Token')

class AuthController {

    async store({request, auth, response}){
        const { email, password } = request.all();
        const healthcareProfessional = await HealthcareProfessional.findBy('email', email );
        console.log("mostra usuário", healthcareProfessional);
        
        if (!healthcareProfessional) {
            return response.status(404).json({message: 'HealthcareProfessional Not Found'});
        }
        
        const token = await auth.attempt(email, password);
        console.log("logado")
        return response.status(200).json({healthcareProfessional, token});
		
    }
}

module.exports = AuthController
