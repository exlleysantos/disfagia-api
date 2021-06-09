'use strict'

const User = use("App/Models/User");
const getFields = (request) =>
    request.only([
        'fullname',
        'email',
        'cpf',
        'birthdate',
        'sex',
        'type',
        'password',
        'diseases',
        'adresses',
        'medicalRecords'
    ])
class UserController {
    async index () {
        return User.query().with('adresses').with('medicalRecords').with('diseases').fetch();
    }

    async store({request}){
        const {adresses, medicalRecords, diseases, ...data} = getFields(request);

        console.log('request', diseases)
        
        const user = await User.create(data);

        if(diseases && diseases.lenght > 0) {
            console.log("diseases", diseases)
            await user.diseases().attach(diseases)
            await user.load('diseases')
            console.log("user", user)
        }

        if(adresses && adresses.lenght > 0) {
            await user.adresses().attach(adresses)
            await user.load('adresses')
        }

        if(medicalRecords && medicalRecords.lenght > 0) {
            await user.medicalRecords().attach(medicalRecords)
            await user.load('medicalRecords')
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

        const type = user.type;
        await user.delete()

        return response.status(200).send({ message: `${type} removed!` })

    }
}

module.exports = UserController
