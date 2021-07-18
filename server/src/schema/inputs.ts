import { gql } from 'apollo-server';

const inputs = gql`
  input UserInput {
    name: String!
    lastname: String!
    email: String!
    phone: String
    password: String!
    score: Float
  }

  input authInput {
    email: String!
    password: String!
  }

  input termsInput {
    adults: Int
    kids: Int
    sex: SexInput
    pets: Int
  }
  
  enum featuType {
    toilets
    bedrooms
    beds
    bunkBeds
    environments
    kitchen
    pool
    balcony
    yard
  }

  input featuresInput {
    name: featuType!
    amount: Int!    
  }

  enum SexInput {
    Hombre
    Mujer
    Ambos
    Otro
  }

  input Locationinput {
    street: String!
    number: Float!
    location: String!
    province: String!
  }

  input PublicationInput {
    name: String!
    location: Locationinput!
    price: Float!
    services: [String]!
    description: String
    terms: termsInput!
    rules: [String]
    features: [featuresInput]
  }

  input newGuestInput {
    publicationId: ID!
    from: String!
    to: String!
  }

  input PublicationsSearchInput {
    destination: String!
    from: String
    to: String
    adults: Int
    kids: Int
    pets: Int
  }
`;

export default inputs;
