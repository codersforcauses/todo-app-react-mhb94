require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Todo = require('./models/todo')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('content', function getId (req) {
    return JSON.stringify(req.body)
  })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

app.get('/api/todos', (req, res) => {
    Todo.find({}).then( notes => {
        res.json(notes)
    })
})

app.delete('/api/notes/:id', (req, res) => {
    console.log(res)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
