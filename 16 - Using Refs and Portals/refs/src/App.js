import React, { Component } from "react";
import { ForwardFormField } from "./FormField";
import { PortalWrapper } from "./PortalWrapper";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.fieldRef = React.createRef();
        this.portalFieldRef = React.createRef();
    }

    focusLocal = () => {
        this.fieldRef.current.focus();
    }

    focusPortal = () => {
        this.portalFieldRef.current.focus();
    }

    render() {
        return <div>
                <PortalWrapper>
                    <ForwardFormField label="Name" ref={ this.portalFieldRef } />                                    
                </PortalWrapper>

                <ForwardFormField label="Name" ref={ this.fieldRef } />                
                <div className="text-center m-2">
                    <button className="btn btn-primary m-1" 
                            onClick={ this.focusLocal }>
                        Focus Local             
                    </button>
                    <button className="btn btn-primary m-1" 
                            onClick={ this.focusPortal }>
                        Focus Portal
                    </button>                    
                </div>
            </div>
    }
}
