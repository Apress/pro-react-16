import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } 
    from "react-router-dom";
import { ToggleLink } from "./routing/ToggleLink";
import { GraphQLTable } from "./graphql/GraphQLTable";
import { PRODUCTS, SUPPLIERS } from "./store/dataTypes";
import { GraphQLEditor } from "./graphql/GraphQLEditor";

export class Selector extends Component {

    render() {
        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">            
                        <ToggleLink to="/products">Products</ToggleLink>
                        <ToggleLink to="/suppliers">Suppliers</ToggleLink>                        
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path="/products" exact={true} 
                                component={ GraphQLTable(PRODUCTS) }  />
                            <Route path="/suppliers" exact={true} 
                                component={ GraphQLTable(SUPPLIERS) }  />                                
                            <Route path="/:dataType/edit/:id" 
                                component= { GraphQLEditor() } />
                            <Redirect to="/products" />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>        
    }
}
