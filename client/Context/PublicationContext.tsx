import React, { createContext, FC, useEffect, useState } from "react";
import {
  useQuery,
  OperationVariables,
  ApolloQueryResult,
} from "@apollo/client";
import { GET_USER } from "../gql/Users";

interface Istep {
  valid;
}

export interface ContextPropsProfile {
  steps?: any;
  setvalidSteps: (a: any) => void;
  setnewPublication: (a: any) => void;
  newPublication: IPublication;
}

export interface IPublication {
  name: string;
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

export const initialProps: ContextPropsProfile = {
  steps: [
    { key: 1, disabled: true },
    { key: 2, disabled: true },
    { key: 3, disabled: true },
  ],
  setvalidSteps: null,
  setnewPublication: null,
  newPublication: {
    name: "",
    location: {
      street: "",
      number: 0,
      location: "",
      province: "",
    },
    price: 0,
    services: [],
    terms: {
      adults: 1,
      kids: 0,
      pets: 0,
      sex: "Ambos",
    },
    features: {
      bedrooms: 1,
      environments: 1,
      toilets: 1,
      kitchen: 0,
    },
    rules: [],
  },
};

const PublicationContext = createContext(initialProps);

const PublicationProvider: FC = ({ children }) => {
  const [validSteps, setvalidSteps] = useState(initialProps.steps);
  const [newPublication, setnewPublication] = useState<IPublication>(
    initialProps.newPublication
  );

  // const { data, error, loading, refetch } = useQuery(GET_USER);

  return (
    <PublicationContext.Provider
      value={{
        steps: validSteps,
        setvalidSteps,
        setnewPublication,
        newPublication,
        // setprofile,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};

export { PublicationContext };
export default PublicationProvider;
