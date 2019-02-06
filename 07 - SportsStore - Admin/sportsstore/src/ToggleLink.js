import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export class ToggleLink extends Component {

    render() {
        return <Route path={ this.props.to } exact={ this.props.exact }
                children={ routeProps => {
            
            const baseClasses = this.props.className || "m-2 btn btn-block";
            const activeClass = this.props.activeClass || "btn-primary";
            const inActiveClass = this.props.inActiveClass || "btn-secondary"

            const combinedClasses = 
                `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`
            
            return <Link to={ this.props.to } className={ combinedClasses }>
                        { this.props.children }
                    </Link>
         }} />
    }
}
