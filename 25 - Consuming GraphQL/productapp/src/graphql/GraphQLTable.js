import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as queries from "./queries";
import { ProductTable } from "../ProductTable";
import * as mutations from "./mutations";
import { PRODUCTS, SUPPLIERS } from "../store/dataTypes";
import { SupplierTable } from "../SupplierTable";

export const GraphQLTable = (dataType) => {

    const getAll = gql(queries[dataType].getAll.graphql);
    const deleteItem = gql(mutations[dataType].delete.graphql);

    return class extends Component {

        constructor(props) {
            super(props);
            this.editCallback = (item) => this.props.history
                .push(`/${dataType}/edit/${item.id}`);
        }
        
        removeItemFromCache = (cache, mutationResult) => {

            const deletedId =  mutationResult.data[mutations[dataType].delete.name];
            const data = 
                cache.readQuery({ query: getAll })[queries[dataType].getAll.name];
            cache.writeQuery({
                query: getAll, 
                data: { [dataType]: data.filter(item => item.id !== deletedId) }
            });
        }

        getRefetchQueries() {
            return dataType === PRODUCTS 
                ? [{query: gql(queries[SUPPLIERS].getAll.graphql)}] : []
        }

        render() {
            return <Query query={ getAll }>
                {({loading, data, refetch }) => {
                    if (loading) {
                        return <h5 
                            className="bg-info text-white text-center m-2 p-2">
                                Loading...
                        </h5>
                    } else {
                        return <Mutation mutation={ deleteItem } 
                                update={ this.removeItemFromCache }
                                refetchQueries={ this.getRefetchQueries }>
                            { doDelete => 
                                 <React.Fragment>
                                     { dataType === PRODUCTS && 
                                        <ProductTable products={data.products} 
                                            editCallback= { this.editCallback }
                                            deleteCallback={ (p) => 
                                                doDelete({variables: {id: p.id} }) }  
                                        />
                                    }
                                    { dataType === SUPPLIERS && 
                                        <SupplierTable suppliers={data.suppliers}
                                            editCallback= { this.editCallback }
                                            deleteCallback={ (p) => 
                                                doDelete({variables: {id: p.id} }) }  
                                        />                                        
                                    }
                                    <div className="text-center">
                                        <button className="btn btn-primary" 
                                                onClick={ () => refetch() }>
                                            Reload Data
                                        </button>
                                    </div>
                                </React.Fragment>                            
                        }
                        </Mutation>                        
                    }
                }}
            </Query>
        }
    }
}
