import React, { Component } from "react";

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorThrown: false
        }
    }

    componentDidCatch = (error, info) => this.setState({ errorThrown: true});
    
    render() {
        return (
            <React.Fragment>
                { this.state.errorThrown && 
                    <h3 className="bg-danger text-white text-center m-2 p-2">
                        Error Detected
                    </h3> 
                }
                { this.props.children }
            </React.Fragment>            
        )
    }
}
