import { gql } from '@apollo/client';

export const NEW_PUBLICATION = gql`
  mutation newPublication($input: PublicationInput) {
    newPublication(input: $input) {
      id
      name
      location {
        street
        number
        location
        province
      }
      price
      owner
      guests {
        guest
      }
      created
      services
      description
      terms {
        adults
        kids
        pets
        sex
      }
      rules
      features {
        toilets
        bedrooms
        Beds
        bunkBeds
        pool
        balcony
        kitchen
        yard
      }
    }
  }
`;

export const NEW_PEPE = gql``;
