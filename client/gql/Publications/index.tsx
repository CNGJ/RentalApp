import { gql } from '@apollo/client';

export const NEW_PUBLICATION = gql`
  mutation newPublication($input: PublicationInput) {
    newPublication(input: $input) {
      id
      name
    }
  }
`;

export const GET_PUBLICATIONS_SEARCH = gql`
  query getPublicationsSearch($input: PublicationsSearchInput) {
    getPublicationsSearch(input: $input) {
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

export const GET_PUBLICATIONS = gql`
  query getPublications {
    getPublications {
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
