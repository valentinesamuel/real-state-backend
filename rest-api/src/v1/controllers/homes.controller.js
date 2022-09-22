let { homesData } = require('../../models/index')

function getAllHomes(req, res) {
    return res.status(200).json(homesData)
}

function addHome(req, res) {
    const newHome = req.body
    homesData.push(newHome)
    return res.status(201).json(newHome)
}

function getHomeById(req, res) {
    const id = Number(req.params.id)
    console.log(id)
    const home = homesData.find(home => home.id === id)
    return res.status(200).json(home)
}

function deleteHomeById(req, res) {
    const id = Number(req.params.id)
    homesData = homesData.filter(home => home.id !== id)
    return res.status(200).json({
        success: true
    })
}

module.exports = {
    getAllHomes,
    addHome,
    getHomeById,
    deleteHomeById
}