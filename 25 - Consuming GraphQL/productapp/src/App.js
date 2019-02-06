import React, { Component } from "react";
// import { Provider } from "react-redux";
// import dataStore from "./store";
import { Selector } from "./Selector";
//import { PRODUCTS, SUPPLIERS } from "./store/dataTypes";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:3600/graphql"
});

export default class App extends Component {

    render() {
        return  <ApolloProvider client={ client }>
                    <Selector />      
                </ApolloProvider>                            
    }
}
