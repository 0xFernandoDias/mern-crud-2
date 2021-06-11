const router = require('express').Router()
let Exercise = require('../models/exercise.model') // It gets the "Schema from ../models"


// CREATE //////////////////////////////
router.route('/add').post((req, res) => { // "localhost:5000/exercises/add" CREATE
    const username = req.body.username // username = variable from client
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({ username, description, duration, date }) // "object" as arguments for the class constructor

    newExercise.save() // it stores in db
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


// READ //////////////////////////////
router.route('/').get((req, res) => { // "localhost:5000/exercises/"
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').get((req, res) => { // "localhost:5000/exercises/<ID>"
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


// UPDATE //////////////////////////////
router.route('/update/:id').post((req, res) => { // "localhost:5000/exercises/update/<id>"
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.duration = Number(req.body.duration)
            exercise.date = Date.parse(req.body.date)

            exercise.save() // it stores in db
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// DELETE //////////////////////////////
router.route('/:id').delete((req, res) => { // "localhost:5000/exercises/delete/<id>"
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router