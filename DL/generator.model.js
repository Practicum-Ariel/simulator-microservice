const mongoose = require('mongoose')

const generatorSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    constructuredAt: {
        type: Date,
        default: Date.now
    },
    sensorsIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'sensor' }],
    dataTableName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['proper', 'anomaly', 'error', 'disconnected'],
        default: 'proper'
    },
    insights: [{ type: mongoose.Schema.Types.ObjectId, ref: 'insight' }],
    lastUpdate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const generatorModel = mongoose.model('generator', generatorSchema)

module.exports = generatorModel