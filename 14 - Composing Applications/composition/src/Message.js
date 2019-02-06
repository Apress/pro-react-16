import React, { Component } from "react";

export class Message extends Component {

    render() {
        return (
            <div className={`h5 bg-${this.props.theme } text-white p-2`}>
                { this.props.message }
            </div>
        )
    }
}
