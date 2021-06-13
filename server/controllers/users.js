import UserModel from '../models/user.model.js'

export const createUsers = async  (req, res) => {
    const username = req.body.username

    const newUser = new UserModel ({username})
    
    try {
        await newUser.save()

        res.status(201).json(newUser)
    } catch(err) {
        res.status(409).json(`Error: ${err}`)
    }
}

export const readUsers = async (req, res) => { 
    try {
        const users = await UserModel.find()

        res.status(200).json(users)
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
    }
}