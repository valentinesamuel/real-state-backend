let homesData = require('./homes.model')

function getAllHomes() {
    return homesData
}

function getHomeById(id) {
    const home =  homesData.find((home) => home.id == id)
    return home
}

function addNewHome(home) {
    homesData.push(home)
    return home
}

function deleteHomeById(id) {
    const home = getHomeById(id)
    homesData = homesData.filter(home => home.id != id)
    return { success: "true" } 
    return home
}
module.exports = {
    addNewHome, deleteHomeById, getAllHomes, getHomeById
}