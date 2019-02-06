import React, { Component } from 'react';
import { ThemeButton } from "./ThemeButton";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Ready",
            counter: 0,
            theme: "secondary"
        }
    }
    
    selectTheme = (newTheme) => {
        this.setState({ 
            theme: newTheme,
            message: `Theme: ${newTheme}`
        });
    }

    handleClick= (event) => {
        console.log(`App: Type: ${event.type} ` 
            + `Target: ${event.target.tagName} ` 
            + `CurrentTarget: ${event.currentTarget.tagName}`);
    }

    render() {
        return  (
            <div className="m-2" onClick={ this.handleClick }>
                    <div className={ `h4 bg-${this.state.theme} 
                            text-white text-center p-2`}>
                        { this.state.message }
                    </div>
                    <div className="text-center" onClick={ this.handleClick }>
                        <ThemeButton theme="primary" callback={ this.selectTheme } />
                        <ThemeButton theme="danger" callback={ this.selectTheme } />
                    </div>                
            </div>
        )
    }
}
