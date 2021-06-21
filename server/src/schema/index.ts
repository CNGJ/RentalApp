import { gql } from 'apollo-server';
import types from './types';
import inputs from './inputs';

//Schema
const typeDefs = gql`
  ${types}

  ${inputs}

  #QUERYS
  type Query {
    #Usuarios
    getUser: User

    #Publicaciones
    getPublications: [Publication]
    getPublicationsSearch(input: PublicationsSearchInput): [Publication]
    getPublication(id: ID!): Publication
  }

  #MUTATIONS
  type Mutation {
    #Crear Usuario
    newUser(input: UserInput): User
    authenticate(input: authInput): Token

    #publicaciones
    newPublication(input: PublicationInput): Publication
    addGuest(input: newGuestInput): Publication
    deletePublication(id: ID): String
  }
`;

export default typeDefs;
