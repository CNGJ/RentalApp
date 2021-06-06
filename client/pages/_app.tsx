import ModalProvider from "../Context/ModalContext";
import ProfileProvider from "../Context/ProfileContext";
import PublicationProvider from "../Context/PublicationContext";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import client from "../config/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <PublicationProvider>
        <ProfileProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ProfileProvider>
      </PublicationProvider>
    </ApolloProvider>
  );
}

export default MyApp;
