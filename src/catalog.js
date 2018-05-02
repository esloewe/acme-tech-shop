import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { catalog, getArticle, addToCart } from "./actions";
import "./styles/catalog.css";
import Article from "./article";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.renderCatalog = this.renderCatalog.bind(this);
        this.handleCartUpdate = this.handleCartUpdate.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(catalog());
    }

    handleCartUpdate() {
        console.log(
            "testing catalog click",
            this.props.getArticle,
            this.props.quantity
        );
        //  not working as i am dispatching after the click ... have to get item from catalog
        this.props.dispatch(addToCart(this.props.article, this.props.quantity));
    }

    renderCatalog() {
        if (!this.props.catalog) {
            return null;
        }
        return this.props.catalog.map(article => {
            return (
                <div key={article.sku} className="cat-article-container">
                    <Link to="/article">
                        <img
                            onClick={() =>
                                this.props.dispatch(getArticle(article.sku))
                            }
                            src={article.image}
                            alt=""
                        />
                    </Link>
                    <h2 id="cat-article-name">{article.name}</h2>
                    <div className="cat-article-price-container">
                        <span className="cat-article-currency">
                            {article.price.currency}{" "}
                        </span>
                        <span className="cat-article-price">
                            {article.price.amount}
                        </span>
                    </div>

                    <button onClick={this.handleCartUpdate()}>
                        {" "}
                        add to cart{" "}
                    </button>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="container-catalog">{this.renderCatalog()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        catalog: state.catalog,
        getArticle: state.getArticle
    };
}
export default connect(mapStateToProps)(Catalog);
