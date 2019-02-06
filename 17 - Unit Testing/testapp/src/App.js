import React, { Component } from "react";
import { ValueInput } from "./ValueInput";
import { Result } from "./Result";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title || "Simple Addition" ,
            fieldValues: [],
            total: 0
        }
    }

    updateFieldValue = (id, value) => {
        this.setState(state => {
            state.fieldValues[id] = Number(value);
            return state;
        });
    }

    updateTotal = () => {
        this.setState(state => ({ 
            total: state.fieldValues.reduce((total, val) => total += val, 0) 
        }))
    }

    render() {
        //throw new Error("something went wrong");
        return <div className="m-2">
                    <h5 className="bg-primary text-white text-center p-2">
                        { this.state.title }
                    </h5>
                    <Result result={ this.state.total } />
                    <ValueInput id="1" changeCallback={ this.updateFieldValue } />
                    <ValueInput id="2" changeCallback={ this.updateFieldValue } />            
                    <ValueInput id="3" changeCallback={ this.updateFieldValue } />                        
                    <div className="text-center">
                    <button className="btn btn-primary" onClick={ this.updateTotal}>
                        Total
                    </button>
            </div>            
        </div>
    }
}
