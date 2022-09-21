const express = require('express');
const homesRouter = express.Router()
const {addHome,deleteHomeById,getAllHomes,getHomeById} = require('../controllers/homes.controller')

homesRouter.get('/', getAllHomes)
homesRouter.get('/:id', getHomeById)
homesRouter.post('/', addHome)
homesRouter.delete('/:id', deleteHomeById)

module.exports = homesRouter