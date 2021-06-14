import React, { createContext, FC, useEffect, useState } from 'react';
import { useQuery, OperationVariables, ApolloQueryResult } from '@apollo/client';
import { GET_USER } from '../gql/Users';

interface IProfile {
  id?: string;
  name?: string;
  lastname?: string;
  email?: string;
  phone?: string;
}

export interface ContextPropsProfile {
  profile?: IProfile;
  // setprofile: (a: any) => void;
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
}

export const initialProps: ContextPropsProfile = {
  profile: null,
  // setprofile: null,
  refetch: null
};

const ProfileContext = createContext(initialProps);

const ProfileProvider: FC = ({ children }) => {
  const [profile, setprofile] = useState(initialProps.profile);

  const { data, error, loading, refetch } = useQuery(GET_USER);

  useEffect(() => {
    console.log(data, 'data');

    if (data) {
      if (data.getUser) {
        const { id, name, lastname, email, phone } = data.getUser;
        setprofile({ id, name, lastname, email, phone });
      } else {
        setprofile(null);
      }
    } else {
      setprofile(null);
    }
  }, [data]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        // setprofile,
        refetch
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext };
export default ProfileProvider;
