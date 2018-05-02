import React from "react";
import { connect } from "react-redux";
import { cart } from "./actions";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        // let dataToCart = this.props.itemsCart.map(i => {
        //     return i.article.sku, i.quantity;
        // });
        // this.props.dispatch(cart(this.props.itemsCart));
    }

    renderItemsCart() {
        if (!this.props.itemsCart) {
            return null;
        }
        return this.props.itemsCart.map(item => {
            return (
                <div key={item.article.sku}>
                    <h1>{item.article.name}</h1>
                    <img src={item.article.image} />
                    <span>{item.quantity}</span>
                </div>
            );
        });
    }

    render() {
        return <div>{this.renderItemsCart()}</div>;
    }
}

function mapStateToProps(state) {
    console.log("cart mapstateprops", state.itemsCart);
    return {
        itemsCart: state.itemsCart
    };
}
export default connect(mapStateToProps)(Cart);
