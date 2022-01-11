import { ApolloServer } from 'apollo-server';
import 'graphql-import-node';
import {
    ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

import typeDefs from './types.graphql'
import {resolvers} from './controllers/resolvers'
import mongoose from 'mongoose'

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017', { user: 'root', pass: 'rootpassword' })
      await console.log("DB connected")
    } catch(error) { 
      console.error(error)
    }
  }

connectDB()

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
});

export {
    server
}