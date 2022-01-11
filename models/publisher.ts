
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const publisherSchema = new Schema ({
    companyName: {
        type: String,
        required: true
    },
    firstParty: {
        type: Boolean,
        required: true
    },
    website: {
        type: String,
        required: true
    },
})

const publisherModel = mongoose.model('Publisher', publisherSchema)

export {
    publisherModel
}