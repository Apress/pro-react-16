import React, { Component } from "react";
import { ProModeContext } from "./ProModeContext";

export class ActionButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }

    handleClick = () => { 
        this.setState({ clickCount: this.state.clickCount + 1});
        this.props.callback();
    }

    render() {
        return (
            <ProModeContext.Consumer>
                { contextData => {
                    if (this.state.clickCount > 1) {
                        throw new Error("Click Counter Error");
                    }
                    return <button 
                        className={ this.getClasses(contextData.proMode)}
                        disabled={ !contextData.proMode }
                        onClick={ this.handleClick }>
                                { this.props.text }
                    </button>
                }}
            </ProModeContext.Consumer>
        )
    }

    getClasses(proMode) {
        let col = proMode ? this.props.theme : "danger";
        return `btn btn-${col} m-2`;
    }
}
