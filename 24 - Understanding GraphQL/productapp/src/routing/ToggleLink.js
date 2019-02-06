import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export class ToggleLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doRedirect: false
        }
    }

    handleClick = () => {
        this.setState({ doRedirect: true}, 
            () => this.setState({ doRedirect: false }));
    }

    render() {
        return <Route path={ this.props.to } exact={ this.props.exact }
                children={ routeProps => {
            
            const baseClasses = this.props.className || "m-2 btn btn-block";
            const activeClass = this.props.activeClass || "btn-primary";
            const inActiveClass = this.props.inActiveClass || "btn-secondary"

            const combinedClasses = 
                `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`
            
            return  <React.Fragment>
                { this.state.doRedirect && <Redirect to={ this.props.to } /> }
                <button className={ combinedClasses } onClick={ this.handleClick }> 
                    {this.props.children} 
                </button>             
            </React.Fragment>
         }} />
    }
}
