const express = require('express')
const v1Api = express.Router()
const homeRouter = require('./routes/homes.router');

v1Api.use('/homes', homeRouter)

module.exports = v1Api

