import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { ApolloProvider } from "@apollo/react-hooks";



import App from "./App";
const API = process.env.REACT_APP_API;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const cache = new InMemoryCache({});

const httpLink = createHttpLink({
  uri: `${API}`,
  useGETForQueries: true
})
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${ACCESS_TOKEN}`
    }
  }
});


const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
