// ___React________________________________________________________________________________________________________________
import React from 'react';
import ReactDOM from 'react-dom/client';
// ___Apollo_______________________________________________________________________________________________________________
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// ___Components___________________________________________________________________________________________________________
import App from './App';

// ___Initializing of Apollo Client________________________________________________________________________________________
const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache()
});


// ___Root_________________________________________________________________________________________________________________
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
