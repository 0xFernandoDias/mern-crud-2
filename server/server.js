const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

//Cors middleware
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`The server is running in port: ${port}`)) // It will show in console if the server is working

// Routes
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

// When we go to "localhost:5000/ ..."
app.use('/exercises', exercisesRouter) // localhost:5000/exercises = ./routes/exercises
app.use('/users', usersRouter)

require('dotenv').config()

//////////////////////////////

const uri = process.env.ATLAS_URI // = "mongodb+srv://dbUser:... "

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection
connection.once('open', () => console.log("The MongoDB database connection established successfully")) // It will show in console if the database is working
