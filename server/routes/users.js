const router = require('express').Router()
let User = require('../models/user.model') // It gets the "Schema from ../models"

// "localhost:5000/users/" READ
router.route('/').get((req, res) => { 
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// "localhost:5000/users/add" CREATE
router.route('/add').post((req, res) => {
    const username = req.body.username // username = client variable

    const newUser = new User({username}) // "object" as arguments for the class constructor

    newUser.save() // it stores in db
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router