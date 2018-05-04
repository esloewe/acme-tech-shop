import React from "react";
import { connect } from "react-redux";
import { removeFromCart, finalCart } from "./actions";
import "./styles/cart.css";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.dispatchFinalCart = this.dispatchFinalCart.bind(this);
    }

    dispatchFinalCart() {
        return this.props.itemsCart.map(i => {
            this.props.dispatch(finalCart(i.article.sku, i.quantity));
        });
    }

    renderItemsCart() {
        if (!this.props.itemsCart) {
            return null;
        } else {
            return this.props.itemsCart.map((item, i) => {
                return (
                    <div className="cart-items-container" key={i}>
                        <img
                            className="cart-image"
                            src={item.article.image}
                            alt=""
                        />
                        <h1 className="cart-name">{item.article.name}</h1>
                        <span className="cart-price">
                            {item.article.price.currency}
                            {"  "}
                            {item.article.price.amount}
                        </span>
                        <span className="cart-qty">
                            Qty:{"  "}
                            {item.quantity}
                        </span>
                        <button
                            onClick={() =>
                                this.props.dispatch(
                                    removeFromCart(item.article.sku)
                                )
                            }
                        >
                            remove item
                        </button>
                    </div>
                );
            });
        }
    }

    render() {
        let total = 0;
        this.props.itemsCart.forEach(item => {
            total += parseInt(item.article.price.amount * item.quantity);
        });

        return (
            <div className="cart-page-container">
                <div>
                    <h2 className="shopping-cart-h2">Shopping Cart</h2>
                    {this.renderItemsCart()}
                </div>
                <div className="renderer-container-shopping-cart">
                    <div className="total-shopping-cart-container">
                        <h2 className="header-title-shopping-cart">Total</h2>

                        <div className="sub-total">
                            <div className="middle-text-payment">
                                Sub-total{" "}
                            </div>
                            <div className="right-side-text-payment">
                                {" "}
                                {total}{" "}
                            </div>
                        </div>

                        <div className="sub-total">
                            <div className="middle-text-payment">Delivery</div>
                            <div className="right-side-text-payment">free</div>
                        </div>
                        <div className="final-total">
                            <div className="middle-text-payment total">
                                Total{" "}
                            </div>{" "}
                            <div className="right-side-text-payment">
                                {" "}
                                {total}{" "}
                            </div>
                            <div className="right-side-text-payment total-amount">
                                {" "}
                            </div>
                        </div>
                        <div />
                        <div className="container-button">
                            <button
                                className="buy-now-button"
                                onClick={this.dispatchFinalCart}
                            >
                                Go to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itemsCart: state.itemsCart
    };
}
export default connect(mapStateToProps)(Cart);
