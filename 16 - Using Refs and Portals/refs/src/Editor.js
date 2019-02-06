import React, { Component } from "react";
import { ValidationDisplay } from "./ValidationDisplay";
import { GetValidationMessages } from "./ValidationMessages";	

export class Editor extends Component {

    constructor(props) {
        super(props);        
        this.formElements = {
            name: { label: "Name", name: "name", 
                validation: { required: true, minLength: 3 }},
            category: { label: "Category", name:"category", 
                validation: { required: true, minLength: 5 }},
            price: { label: "Price", name: "price",
                validation: { type: "number", required: true, min: 5 }}
        }
        this.state = {
            errors: {},
            wrapContent: false
        }
    }

    setElement = (element) => {
        if (element !== null) {
            this.formElements[element.name].element = element;
        }
    }

    handleAdd = () => {
        if (this.validateFormElements()) {
            let data = {};
            Object.values(this.formElements)
                .forEach(v => { 
                    data[v.element.name] = v.element.value;
                    v.element.value = "";
                });
            this.props.callback(data);            
            this.formElements.name.element.focus();                
        }
    }

    validateFormElement = (name) => {
        let errors = GetValidationMessages(this.formElements[name].element);
        this.setState(state => state.errors[name] = errors);
        return errors.length === 0;
    }

    validateFormElements = () => {
        let valid = true;
        Object.keys(this.formElements).forEach(name => {
            if (!this.validateFormElement(name)) {
                valid = false;
            }
        })   
        return valid;
    }

    toggleWrap = () => {
        this.setState(state => state.wrapContent = !state.wrapContent);
    }

    wrapContent(content) {
        return this.state.wrapContent 
            ? <div className="bg-secondary p-2">
                    <div className="bg-light">{ content }</div>
              </div>
            : content;
    }

    render() {
        return this.wrapContent(
            <React.Fragment>
                    <div className="form-group text-center p-2">
                        <div className="form-check">
                            <input className="form-check-input"
                                type="checkbox"
                                checked={ this.state.wrapContent }
                                onChange={ this.toggleWrap } />                                    
                            <label className="form-check-label">Wrap Content</label>                                                                
                        </div>
                    </div>              
                {
                    Object.values(this.formElements).map(elem => 
                        <div className="form-group p-2" key={ elem.name }>
                            <label>{ elem.label }</label>
                            <input className="form-control" 
                               name={ elem.name }
                               autoFocus={ elem.name === "name" } 
                               ref={ this.setElement } 
                               onChange={ () => this.validateFormElement(elem.name) }
                               { ...elem.validation} />
                            <ValidationDisplay 
                                errors={ this.state.errors[elem.name] } />
                        </div>)
                }    
                <div className="text-center">
                    <button className="btn btn-primary" onClick={ this.handleAdd }>
                        Add
                    </button>            
                </div>            
            </React.Fragment>)
    }

    getSnapshotBeforeUpdate(props, state) {
        return Object.values(this.formElements).map(item => 
            {return { name: [item.name], value: item.element.value }})
    }

    componentDidUpdate(oldProps, oldState, snapshot) {
        snapshot.forEach(item => {
            let element = this.formElements[item.name].element
            if (element.value !== item.value) {
                element.value = item.value;
            }
        });
    }

}
