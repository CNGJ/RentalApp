import { gql } from '@apollo/client';

export const NEW_USER = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      lastname
      email
      phone
      created
    }
  }
`;

export const AUTHENTICATE = gql`
  mutation authenticate($input: authInput) {
    authenticate(input: $input) {
      token
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    getUser {
      id
      name
      lastname
      email
      phone
    }
  }
`;
