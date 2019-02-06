import React, { Component } from "react";
import gql from "graphql-tag";
import * as queries from "./queries";
import * as mutations from "./mutations";
import { Query, Mutation } from "react-apollo";
import { PRODUCTS } from "../store/dataTypes";
import { ProductEditor } from "../ProductEditor";
import { SupplierEditor } from "../SupplierEditor";

export const GraphQLEditor = () => {

    return class extends Component {

        constructor(props) {
            super(props);
            this.dataType = this.props.match.params.dataType;
            this.id = this.props.match.params.id;
            this.query = gql(queries[this.dataType].getOne.graphql);
            this.variables = { id: this.id };
            this.mutation = gql(mutations[this.dataType].store.graphql);
            this.navigation = () => props.history.push(`/${this.dataType}`);
        }

        render() {
            return <Query query={ this.query} variables={ this.variables }>
            { 
                ({loading, data}) => {
                    if (!loading) {
                        return <Mutation mutation={ this.mutation } 
                                onCompleted={ this.navigation }>
                            { (store) => {
                                if (this.dataType === PRODUCTS) { 
                                    return <ProductEditor key={ this.id } 
                                        product={ data.product }
                                        saveCallback={ (formData) => 
                                            store({variables: formData})}
                                        cancelCallback={ this.navigation } />
                                } else {
                                    return <SupplierEditor key={ this.id }
                                        supplier={ data.supplier }
                                        saveCallback={ (formData => 
                                            store({ variables: formData }))}
                                        cancelCallback={ this.navigation } />
                                }
                            }
                        }
                        </Mutation>
                    } else {
                        return null;
                    }
                }
            }
            </Query>
        }
    }
}
