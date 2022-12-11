const {Schema, model} = require('mongoose')

const freelancerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    hourlyRate:{
        type: Number,
        required: true
    }, 
    skills:{
        type: [],
        required: true
    },
    education:{
        type: String,
        required: true
    },
    languages:{
        type: [],
        required: true
    }
})

const Freelancer = model('Freelancer', freelancerSchema)

module.exports = Freelancer