import React from "react";
import { connect } from "react-redux";
import { cart } from "./actions";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {}

    renderItemsCart() {
        if (!this.props.itemsCart) {
            return null;
        } else {
            return this.props.itemsCart.map(item => {
                return (
                    <div key={item.sku} className="cart-items-container">
                        <h1>{item.article.name}</h1>
                        <img src={item.article.image} />
                        <span>{item.quantity}</span>
                    </div>
                );
            });
        }
    }

    render() {
        return <div>{this.renderItemsCart()}</div>;
    }
}

function mapStateToProps(state) {
    return {
        itemsCart: state.itemsCart
    };
}
export default connect(mapStateToProps)(Cart);
