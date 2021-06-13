import express from 'express'
import {readUsers, createUsers} from '../controllers/users.js'

const router = express.Router()

// CREATE ////////////////////////////
router.post('/add', createUsers)

// READ ////////////////////////////
router.get('/', readUsers)

export default router