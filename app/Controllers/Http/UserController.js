'use strict'

const User = use("App/Models/User");

class UserController {
    async index () {
        return User.all();
    }

    async store({request}){
        const data = request.only(["fullname","email", "password", "type"])

        return User.create(data);
    }

    async show ({ params }) {
        return User.findOrFail(params.id)  
    }
    async update({ params, request }) {
        const user = await User.findOrFail(params.id);
        const data = request.only(["fullname, password"]);
        
        user.merge(data);
        await user.save();
        return user; 
    }
    async destroy({params, auth, response}){
        const user = await User.findOrFail(params.id)
        console.log(user)
        /*
        Remover comentário quando autenticação estiver pronta.
        if(user.id !== auth.user.id){ 
            return response.status(401).send({ error: 'Not authorized' })
        }
        */
        const type = user.type;
        await user.delete()

        return response.status(200).send({ message: `${type} removed!` })

    }
}

module.exports = UserController
