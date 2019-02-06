import React, { Component } from "react";
import { Link } from "react-router-dom";

export class RouteInfo extends Component {

    renderTable(title, prop, propertyNames) {
        return <React.Fragment>
            <tr><th colSpan="2" className="text-center">{ title }</th></tr>
            { propertyNames.map(p => 
                <tr key={p }>
                    <td>{ p }</td>
                    <td>{ JSON.stringify(prop[p]) }</td>
                </tr>) 
            }
        </React.Fragment>
    }

    render() {
        return <div className="bg-info m-2 p-2">
            <h4 className="text-white text-center">Route Info</h4>    
            <table className="table table-sm table-striped bg-light">
                <tbody>
                    { (this.props.match.params.datatype === undefined ||
                            this.props.match.params.datatype ==="match")
                        && this.renderTable("Match", this.props.match, 
                            ["url", "path", "params", "isExact"] )}
                    { (this.props.match.params.datatype === undefined ||
                            this.props.match.params.datatype === "location")
                        &&  this.renderTable("Location", this.props.location, 
                            ["key", "pathname", "search", "hash", "state"] )} 
                </tbody>
            </table>    
            <div className="text-center m-2 bg-light">
                <Link className="btn btn-primary m-2"
                    to={ this.props.location }>Location</Link>
            </div>        
        </div> 
    }    
}
