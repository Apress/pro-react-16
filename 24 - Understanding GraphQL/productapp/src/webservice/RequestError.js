import React, { Component } from "react";
import { Link } from "react-router-dom";

export class RequestError extends Component {

    render() {
        return <div>
            <h5 className="bg-danger text-center text-white m-2 p-3">
                { this.props.match.params.message }
            </h5>
            <div className="text-center">
                <Link to="/" className="btn btn-secondary">OK</Link>
            </div>
        </div>
    }
}
