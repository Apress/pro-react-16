import React, { Component } from "react";
import ReactDOM from "react-dom";

export class PortalWrapper extends Component {

    constructor(props) {
        super(props);
        this.portalElement = document.getElementById("portal");
    }

    render() {
        return ReactDOM.createPortal(
            <div className="border p-3">{ this.props.children }</div>
        , this.portalElement);
    }
}
