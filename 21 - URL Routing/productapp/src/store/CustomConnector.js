import React, { Component } from "react";

export const CustomConnectorContext = React.createContext();

export class CustomConnectorProvider extends Component {

    render() {
        return <CustomConnectorContext.Provider value={ this.props.dataStore }>
            { this.props.children }
        </CustomConnectorContext.Provider>
    }
}

export class CustomConnector extends React.Component {
    static contextType = CustomConnectorContext;

    constructor(props, context) {
        super(props, context);
        this.state = this.selectData();
        this.functionProps = Object.entries(this.props.dispatchers)
            .map(([k, v]) => [k, (...args) => this.context.dispatch(v(...args))])
            .reduce((result, [k, v]) => ({...result, [k]: v}), {})
    }

    render() {
        return  React.Children.map(this.props.children, c => 
            React.cloneElement(c, { ...this.state, ...this.functionProps }))
    }

    selectData() {
        let storeState = this.context.getState();
        return Object.entries(this.props.selectors).map(([k, v]) => 
                [k, v(storeState)])
            .reduce((result, [k, v]) => ({ ...result, [k]: v}), {});
    }

    handleDataStoreChange() {
        let newData = this.selectData();
        Object.keys(this.props.selectors)
            .filter(key => this.state[key] !== newData[key])
            .forEach(key => this.setState({ [key]: newData[key]}));
    }

    componentDidMount() {
        this.unsubscriber = 
            this.context.subscribe(() => this.handleDataStoreChange());
    }

    componentWillUnmount() {
        this.unsubscriber();
    }    
}
