import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()

//Cors middleware
app.use(cors())
app.use(express.json())

dotenv.config()
const URI = process.env.ATLAS_URI // = "mongodb+srv://dbUser:... "
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`The server is running in port: ${PORT}`)) // It will show in console if the server is working

// Routes
import exercisesRouter from './routes/exercises.js'
import usersRouter from './routes/users.js'

// When we go to "localhost:5000/ ..."
app.use('/exercises', exercisesRouter) // localhost:5000/exercises = ./routes/exercises
app.use('/users', usersRouter)

//////////////////////////////

mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

mongoose.connection.once('open', () => console.log("The MongoDB database connection established successfully")) // It will show in console if the database is working
