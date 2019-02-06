import React, { Component } from "react";

export class OrdersRow extends Component {

    calcTotal = (products) => products.reduce((total, p) => 
        total += p.quantity * p.product.price, 0).toFixed(2)

    getShipping = (order) => order.shipped                 
        ? <i className="fa fa-shipping-fast text-success" /> 
        : <i className="fa fa-exclamation-circle text-danger" /> 
    
    render = () => 
        <tr>
            <td>{ this.props.order.id }</td>
            <td>{this.props.order.name}</td>
            <td>{ this.props.order.email }</td>
            <td className="text-right">
                ${ this.calcTotal(this.props.order.products) }
            </td>
            <td className="text-center">
                <button className="btn btn-sm btn-block bg-muted" 
                        onClick={ this.props.toggleShipped }>
                    { this.getShipping(this.props.order )}                
                    <span>
                        { this.props.order.shipped 
                            ? " Shipped" : " Pending"}
                    </span>
                </button>
            </td>
        </tr>
}
