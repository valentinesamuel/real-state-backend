const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const v1Router = require('../src/v1/index');

app.use(cors({
    origin: '*'
}))
app.use(morgan('combined'))
app.use(express.json())
app.use('/v1', v1Router)
app.get('/', (req, res) => {
  return res.status(200).json("Welcome bruvhhh.")
})

module.exports = app