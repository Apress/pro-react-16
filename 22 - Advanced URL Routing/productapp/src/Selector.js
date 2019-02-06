import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } 
    from "react-router-dom";
import { ToggleLink } from "./routing/ToggleLink";
//import { CustomPrompt } from "./routing/CustomPrompt";
import { RoutedDisplay } from "./routing/RoutedDisplay";

export class Selector extends Component {

    render() {

        const routes = React.Children.map(this.props.children, child => ({
            component: child,
            name: child.props.name,            
            url: `/${child.props.name.toLowerCase()}`,
            datatype: child.props.datatype
        }));

        return <Router getUserConfirmation={ this.customGetUserConfirmation }>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">            
                        { routes.map(r => <ToggleLink key={ r.url } to={ r.url }>
                                            { r.name }
                                        </ToggleLink>)}
                    </div>
                    <div className="col">
                        <Switch>
                            { routes.map(r => 
                               <Route key={ r.url } 
                                   path={ `/:datatype(${r.datatype})/:mode?/:id?`}
                                   component={ RoutedDisplay(r.datatype)} />
                            )}
                            <Redirect to={ routes[0].url } />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>        
    }
}
