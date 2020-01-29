const mongoose = require('mongoose')

//creating schema
const Schema = mongoose.Schema

const bookmarkSchema = new Schema( {
    title : {
        type: String,
        required: true
    },
    original_url : {
        type: String,
        required: true
    },
    tags : {
        type: [String],
        required: true
    },
    hashedUrl : {
        type: String
    },
    createdAt : {
        type: Date,
        default: new Date()
    }
})

//creating model 
const Bookmark = mongoose.model('Bookmark',bookmarkSchema)

module.exports = Bookmark