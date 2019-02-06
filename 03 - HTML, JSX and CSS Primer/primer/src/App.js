import React, { Component } from "react";

export default class App extends Component {

    render = () => 
        <div className="m-2">
            <div className="form-group">
                <label>Name:</label>
                <input className="form-control" />
            </div>
            <div className="form-group">
                <label>City:</label>
                <input className="form-control" />
            </div>            
        </div>        
}
