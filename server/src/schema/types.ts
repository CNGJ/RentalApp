import { gql } from 'apollo-server';

const types = gql`
  #TYPES

  type User {
    id: ID
    name: String
    lastname: String
    email: String
    phone: String
    created: String
    score: Float
  }

  type Terms {
    adults: Int
    kids: Int
    sex: String
    pets: Int
  }

  type Features {
    toilets: Int
    bedrooms: Int
    Beds: Int
    bunkBeds: Int
    environments: Int
    kitchen: Int
    pool: Int
    balcony: Int
    yard: Int
  }

  type ILocation {
    street: String
    number: Float
    location: String
    province: String
  }

  type Publication {
    id: ID
    name: String
    location: ILocation
    price: Float
    created: String
    owner: ID
    services: [String]
    guests: [Guest]
    description: String
    terms: Terms
    rules: [String]
    features: Features
  }

  type Token {
    token: String
  }

  type Guest {
    from: String
    to: String
    guest: ID
  }
`;

export default types;
