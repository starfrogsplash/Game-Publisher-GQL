import { publisherModel } from '../models/publisher'
import { gameModel } from '../models/game'

const resolvers = {
    Query: {
         //@ts-ignorets-ignore
        findGame: async (parent, args, context, info) => {
            const { title, publisherId } = args
            const result = await gameModel.findOne({title} )
            return JSON.parse(JSON.stringify(result));
        },
    },
    Mutation: {
        //@ts-ignorets-ignore
        createPublisher: async (parent, args, context, info) => {
            console.log(args)
            const { companyName, firstParty, website } = args
            const publisher = new publisherModel({
                companyName,
                firstParty,
                website
            })

            const result = await publisher.save()
            return JSON.parse(JSON.stringify(result));
        },

        //@ts-ignorets-ignore
        createGame: async (parent, args, context, info) => {
            const { title, publisherId } = args
            const game = new gameModel({title, publisherId})
            const result = await game.save()
            const findPublisher = await publisherModel.findById(result._doc.publisherId)
            return JSON.parse(JSON.stringify({...result._doc, publisher: findPublisher}));
        }
    }
};


export {
    resolvers
}