import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "node-fetch";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("travel-token");

  const authtoken = `Bearer ${token}`;

  return {
    headers: {
      ...headers,
      authorization: authtoken,
    },
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
