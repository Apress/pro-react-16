import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProductsRow extends Component {
    
    render = () => 
        <tr>
            <td>{ this.props.product.id }</td>
            <td>{this.props.product.name}</td>
            <td>{ this.props.product.category }</td>
            <td className="text-right">
                ${ this.props.product.price.toFixed(2) }
            </td>
            <td className="text-center">
                <button className="btn btn-sm btn-danger mx-1" 
                    onClick={ () => 
                        this.props.deleteProduct(this.props.product.id) }>
                            Delete
                </button>
                <Link to={`/admin/products/${this.props.product.id}`}
                    className="btn btn-sm btn-warning">
                        Edit
                </Link>
            </td>
        </tr>
}
