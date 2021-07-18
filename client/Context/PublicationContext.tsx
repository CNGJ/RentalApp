import React, { createContext, FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PUBLICATIONS_SEARCH } from '../gql/Publications';

export interface ContextPropsProfile {
  steps?: any;
  setvalidSteps: (a: any) => void;
  setnewPublication: (a: any) => void;
  NewPublicationData: IPublication;
  searchPublications: IPublication[];
  searchFilters: ISearchFilters;
  setSearchPublications: (publications: IPublication[]) => void;
  setSearchFilters: (filters: ISearchFilters) => void;
  isLoading: boolean;
}

export interface IPublication {
  id?: string;
  name: string;
  description: string;
  location: ILocation;
  price: number;
  // owner: string;
  services: string[];
  terms: ITerms;
  rules: string[];
  features: IFeatures;
}

export interface IFeatures {
  toilets: number;
  bedrooms: number;
  environments: number;
  kitchen: number;
}

export interface ILocation {
  street: string;
  number: number;
  location: string;
  province: string;
}

export interface ITerms {
  adults: number;
  kids: number;
  pets: number;
  sex: string;
}

export interface ISearchFilters {
  destination: string;
  from: string;
  to: string;
  adults: number;
  kids: number;
  pets: number;
}

export const initialProps: ContextPropsProfile = {
  steps: [
    { key: 1, disabled: true },
    { key: 2, disabled: true },
    { key: 3, disabled: true }
  ],
  setvalidSteps: null,
  setnewPublication: null,
  NewPublicationData: {
    name: '',
    description: '',
    location: {
      street: '',
      number: 0,
      location: '',
      province: ''
    },
    price: 0,
    services: [],
    terms: {
      adults: 1,
      kids: 0,
      pets: 0,
      sex: 'Ambos'
    },
    features: {
      bedrooms: 1,
      environments: 1,
      toilets: 1,
      kitchen: 0
    },
    rules: []
  },
  searchPublications: [],
  searchFilters: {
    adults: 0,
    kids: 0,
    pets: 0,
    destination: '',
    from: '',
    to: ''
  },
  setSearchPublications: null,
  setSearchFilters: null,
  isLoading: false
};

const PublicationContext = createContext(initialProps);

const PublicationProvider: FC = ({ children }) => {
  const [validSteps, setvalidSteps] = useState(initialProps.steps);
  const [NewPublicationData, setnewPublication] = useState<IPublication>(initialProps.NewPublicationData);
  const [searchPublications, setSearchPublications] = useState(initialProps.searchPublications);
  const [searchFilters, setSearchFilters] = useState(initialProps.searchFilters);
  const [isLoading, setIsLoading] = useState(initialProps.isLoading);
  const { data, loading } = useQuery(GET_PUBLICATIONS_SEARCH, {
    variables: {
      input: {
        ...searchFilters
      }
    }
  });

  useEffect(() => {
    if (!loading) {
      if (data && data.getPublicationsSearch) {
        setSearchPublications(data.getPublicationsSearch);
      }
    }
    setIsLoading(loading);
  }, [loading, searchFilters]);

  return (
    <PublicationContext.Provider
      value={{
        steps: validSteps,
        setvalidSteps,
        setnewPublication,
        NewPublicationData,
        searchPublications,
        searchFilters,
        setSearchPublications,
        setSearchFilters,
        isLoading
        // setPublicationsSearch,
        // publicationsSearch,
        // searchRefetch
        // setprofile,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};

export { PublicationContext };
export default PublicationProvider;
