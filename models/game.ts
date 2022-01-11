import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    publisherId : {
        type: Schema.Types.ObjectId,
        ref: 'Publisher'
    }
})

const gameModel = mongoose.model('Game', gameSchema)

export {
    gameModel
}