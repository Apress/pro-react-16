import React, { Component } from "react";
import { ProductTableRow } from "./ProductTableRow";

export class ProductTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="5" 
                                className="bg-primary text-white text-center h4 p-2">
                            Products
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th><th>Name</th><th>Category</th>
                        <th className="text-right">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map(p => 
                            <ProductTableRow product={ p } 
                                key={ p.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}
