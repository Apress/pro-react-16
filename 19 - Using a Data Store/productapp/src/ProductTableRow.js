import React, { Component } from "react";

export class ProductTableRow extends Component {

    render() {
        let p = this.props.product;
        return <tr>
            <td>{ p.id }</td>
            <td>{ p.name }</td>
            <td>{ p.category}</td>
            <td className="text-right">${ Number(p.price).toFixed(2) }</td>
            <td>
                <button className="btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(p) }>
                        Edit
                </button>
                <button className="btn btn-sm btn-danger m-1"
                    onClick={ () => this.props.deleteCallback(p) }>
                        Delete
                    </button>                    
            </td>
        </tr>
    }
}
