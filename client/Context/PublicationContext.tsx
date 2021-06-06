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
}

export const initialProps: ContextPropsProfile = {
  steps: [
    { key: 1, disabled: true },
    { key: 2, disabled: true },
  ],
  setvalidSteps: null,
  // setprofile: null,
};

const PublicationContext = createContext(initialProps);

const PublicationProvider: FC = ({ children }) => {
  const [validSteps, setvalidSteps] = useState(initialProps.steps);

  // const { data, error, loading, refetch } = useQuery(GET_USER);

  return (
    <PublicationContext.Provider
      value={{
        steps: validSteps,
        setvalidSteps,
        // setprofile,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};

export { PublicationContext };
export default PublicationProvider;
