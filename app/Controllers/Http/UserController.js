'use strict'

const User = use("App/Models/User");

class UserController {
    async index () {
        return User.query().with('adresses').with('medicalRecords').with('diseases').fetch();
    }

    async store({request}){
        const {adresses, medicalRecords, diseases, ...data} = request.only(["fullname","email", "password", "type", "adresses", "medicalRecords"])
        
        const user = await User.create(data);

        if(adresses && adresses.lenght > 0) {
            await user.adresses().attach(adresses)
            await user.load('adresses')
        }

        if(medicalRecords && medicalRecords.lenght > 0) {
            await user.medicalRecords().attach(medicalRecords)
            await user.load('medicalRecords')
        }

        if(diseases && diseases.lenght > 0) {
            await user.diseases().attach(diseases)
            await user.load('diseases')
        }
        return user;
    }

    async show ({ params }) {
        const user = await User.findOrFail(params.id);
        await user.loadMany(['adresses', 'medicalRecords', 'diseases'])
        return user;
    }
    async update({ params, request }) {
        const user = await User.findOrFail(params.id);
        const data = request.only(["fullname", "password", "birthdate"]);
        
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
