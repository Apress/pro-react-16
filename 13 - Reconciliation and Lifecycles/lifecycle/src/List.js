import React, { Component } from "react";
import { ActionButton } from "./ActionButton";

export class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: ["Bob", "Alice", "Dora"]
        }
    }

    reverseList = () => {
        this.setState({ names: this.state.names.reverse()});
    }

    render() {
        console.log("Render List Component");
        return (
            <div>
                <ActionButton callback={ this.reverseList }
                    text="Reverse Names" />            
                { this.state.names.map((name, index) => {
                    return <h5 id={ name.toLowerCase() } key={ name }>{ name }</h5>
                })}
            </div>
        )
    }
}
