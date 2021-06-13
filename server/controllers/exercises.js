import ExerciseModel from '../models/exercise.model.js' // It gets the "Schema from ../models"

// localhost:5000/exercises/add
export const createExercise = async (req, res) => {
    const username = req.body.username // username = variable from client
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new ExerciseModel({ username, description, duration, date }) // "object" as arguments for the class constructor

    try {
        await newExercise.save()

        res.status(201).json(newExercise)
    } catch (err) {
        res.status(409).json(`Error: ${err}`)
    }
}

// localhost:5000/exercises/
export const readExercises = async (req, res) => {
    try {
        const exercises = await ExerciseModel.find()

        res.status(200).json(exercises)
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
    }
}

// localhost:5000/exercises/<id>
export const readExercise = async (req, res) => {
    try {
        const exercise = await ExerciseModel.findById(req.params.id)

        res.status(201).json(exercise)
    } catch (err) {
        res.status(409).json(`Error: ${err}`)
    }
}

// localhost:5000/exercises/update/<id>
export const updateExercise = async (req, res) => {
    const exercise = await ExerciseModel.findById(req.params.id)

    exercise.username = req.body.username
    exercise.description = req.body.description
    exercise.duration = Number(req.body.duration)
    exercise.date = Date.parse(req.body.date)

    try {
        await exercise.save() // it stores in db

        res.status(201).json(exercise)
    } catch (err) {
        res.status(409).json(`Error: ${err}`)
    }
}

// localhost:5000/exercises/delete/<id>
export const deleteExercise = async (req, res) => {
    try {
        await ExerciseModel.findByIdAndDelete(req.params.id).exec()

        res.status(201).json(`Exercise Deleted!`)
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
    }
}
