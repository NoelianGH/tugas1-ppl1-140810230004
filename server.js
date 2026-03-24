require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const usersRouter = require("./src/routes/users")
app.use('/users', usersRouter)

app.listen(3000, () => console.log('Server Started'))

const taskRoutes = require("./src/routes/taskRoutes");
app.use("/tasks", taskRoutes);