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

async function getFreelancerRegistration(ownerId) {
    return Freelancer.find({_ownerId: ownerId})
}

module.exports = {
    getAll,
    getById,
    create,
    getFreelancerRegistration
}

