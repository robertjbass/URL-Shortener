const mongoose = require('mongoose')
const shortId = require('shortid')

const shurtUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

// Connects database/schema and model
module.exports = mongoose.model('shortUrl', shortUrlSchema)