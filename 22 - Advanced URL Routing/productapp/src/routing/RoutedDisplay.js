import React, { Component } from "react";
import { ProductTable } from "../ProductTable"
import { ProductEditor } from "../ProductEditor";
import { EditorConnector } from "../store/EditorConnector";
import { PRODUCTS } from "../store/dataTypes";
import { TableConnector } from "../store/TableConnector";
import { Link } from "react-router-dom";
import { SupplierEditor } from "../SupplierEditor";
import { SupplierTable } from "../SupplierTable";

export const RoutedDisplay = (dataType) => {

    const ConnectedEditor = EditorConnector(dataType, dataType === PRODUCTS 
        ? ProductEditor: SupplierEditor);
    const ConnectedTable = TableConnector(dataType, dataType === PRODUCTS 
        ? ProductTable : SupplierTable);
    
    return class extends Component {
        render() {
            const modeParam = this.props.match.params.mode;
            if (modeParam === "edit" || modeParam === "create") {
                return <ConnectedEditor key={ this.props.match.params.id || -1 } />
            } else {
                return <div className="m-2">
                    <ConnectedTable />
                    <div className="text-center">
                        <Link to={`/${dataType}/create`} 
                                className="btn btn-primary m-1">
                            Create
                        </Link>
                    </div>                        
                </div>
            }
        }
    }
}
