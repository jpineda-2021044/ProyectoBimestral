import { initServer } from './configs/app.js'
import { connect } from './configs/mongo.js'
import User from './src/user/user.model.js'
import { encrypt } from './src/utils/validator.js'

const userDefualt = async()=>{
    try {
        const existUser = await User.findOne()
        if(!existUser){
            const newUser = new User({
                name: "Juan",
                surname: "Pineda",
                username: "pepito",
                email: "gmail",
                password: "12345678",
                address: "zona",
                phone: "12345678",
                role: "ADMIN"

            })
            newUser.password = await encrypt(newUser.password)
            await newUser.save()
            console.log('User default created', newUser)
        }
        return console.log('User default exists')
    } catch (error) {
        console.error(error)
        return error
    }
}

userDefualt()
initServer()
connect()