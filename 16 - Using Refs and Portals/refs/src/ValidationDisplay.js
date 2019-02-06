import React, { Component } from "react";

export class ValidationDisplay extends Component {

    render() {
        return this.props.errors 
            ? this.props.errors.map(err => 
                <div className="small bg-danger text-white mt-1 p-1" 
                        key={ err } >
                    { err } 
                </div>)
            : null
    }
}
