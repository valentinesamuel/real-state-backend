const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(cors({
    origin: '*'
}))
app.use(morgan('combined'))
app.use(express.json())
app.get('/', (req, res) => {
  return res.status(200).json("Welcome bruvhhh.")
})

module.exports = app