import React from "react";
import "./styles/checkout.css";

export default class Checkout extends React.Component {
    render() {
        return (
            <div className="checkout-container">
                <div className="order-details">
                    <h1>Checkout</h1>
                    <h2>Order Details</h2>
                </div>
                <div className="order-payment">
                    <button>pay now</button>
                </div>
            </div>
        );
    }
}
