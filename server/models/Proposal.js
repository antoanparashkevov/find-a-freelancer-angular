const {Schema, model} = require('mongoose')


const proposalSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true
    }
})

const Proposal = model('Proposal', proposalSchema)

module.exports = Proposal