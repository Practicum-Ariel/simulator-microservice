const mongoose = require('mongoose')

const gen300Schema = new mongoose.Schema({
    scenarioId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required : true,
        default : Date.now
    }
},
    {
        strict: false
    }

)

const gen300Model = mongoose.model('gen300', gen300Schema)

module.exports = gen300Model
