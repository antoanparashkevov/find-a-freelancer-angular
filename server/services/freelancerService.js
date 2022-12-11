const Freelancer = require('../models/Freelancer')

async function getAll () {
    return Freelancer.find({})
}

async function getById(id) {
    return Freelancer.findById(id)
}

async function create(item) {
    return Freelancer.create(item)
}

module.exports = {
    getAll,
    getById,
    create,
}
