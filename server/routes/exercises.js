import express from 'express'
import {createExercise, readExercises, readExercise, updateExercise, deleteExercise} from '../controllers/exercises.js'

const router = express.Router()

// CREATE //////////////////////////////
router.post('/add', createExercise)

// READ //////////////////////////////
router.get('/', readExercises)

router.get('/:id', readExercise)

// UPDATE //////////////////////////////
router.post('/update/:id', updateExercise)

// DELETE //////////////////////////////
router.delete('/delete/:id', deleteExercise)

export default router