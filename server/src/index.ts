import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import connectDb from './database';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const authToken = req.headers['authorization'] || '';
    if (authToken) {
      const token = authToken.replace('Bearer ', '');
      try {
        const user = await jwt.verify(token, `${process.env.SECRET_WORD}`);
        return { user };
      } catch (error) {
        console.log(error);
      }
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`Server run in URL ${url}`);
});
