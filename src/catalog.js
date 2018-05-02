import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { catalog, getArticle } from "./actions";
import "./styles/catalog.css";
import Article from "./article";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.renderCatalog = this.renderCatalog.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(catalog());
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

                    <button> add to cart </button>
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
