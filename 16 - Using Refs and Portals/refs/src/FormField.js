import React, { Component } from "react";

export const ForwardFormField = React.forwardRef((props, ref) => 
     <FormField { ...props } fieldRef={ ref } />
)

export class FormField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fieldValue: ""
        }
    }

    handleChange = (ev) => {
        this.setState({ fieldValue: ev.target.value});
    }

    render() {
        return <div className="form-group m-2">
            <label>{ this.props.label }</label>
            <input className="form-control" value={ this.state.fieldValue }
                onChange={ this.handleChange } ref={ this.props.fieldRef } />
        </div>
    }
}
