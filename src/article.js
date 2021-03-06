import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./actions";
import "./styles/article.css";

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            quantity: 1
        };
        this.handleCartUpdate = this.handleCartUpdate.bind(this);
        this.handleQty = this.handleQty.bind(this);
    }

    handleCartUpdate() {
        this.props.dispatch(
            addToCart(this.props.getArticle, this.state.quantity)
        );
    }

    handleQty(e) {
        this.setState({ quantity: e.target.value });
    }

    renderArticle() {
        if (!this.props.getArticle) {
            return null;
        }

        return (
            <div className="article-container">
                <div className="article-image">
                    <img src={this.props.getArticle.image} alt="" />
                </div>
                <div className="article-info">
                    <p>
                        {this.props.getArticle.description
                            .replace("<p>", "")
                            .replace("</p>", "")
                            .replace(" <p>", "")}
                    </p>
                    <h2 className="article-name">
                        {this.props.getArticle.name}
                    </h2>

                    <span className="right-grid-article">
                        <span className="article-price">
                            {this.props.getArticle.price.currency}{" "}
                            {this.props.getArticle.price.amount}
                        </span>
                    </span>
                    <span id="qty">Qty:</span>
                    <input
                        id="qty-input"
                        onChange={this.handleQty}
                        className="cart-quantity"
                        type="number"
                        name="quantity"
                        value={this.state.quantity}
                        min="1"
                        max="10"
                    />
                    <Link to="/cart">
                        <button onClick={this.handleCartUpdate}>
                            {" "}
                            add to cart{" "}
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        return <div>{this.renderArticle()}</div>;
    }
}

function mapStateToProps(state) {
    return {
        getArticle: state.getArticle
    };
}
export default connect(mapStateToProps)(Article);
