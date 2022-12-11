const Proposal = require('../models/Proposal')

async function getAll () {
    return Proposal.find({})
}

async function getById(id) {
    return Proposal.findById(id)
}

async function create(item) {
    return Proposal.create(item)
}

module.exports = {
    getAll,
    getById,
    create,
}

