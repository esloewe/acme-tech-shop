import React from "react";
import { connect } from "react-redux";
import { getArticle } from "./actions";
import axios from "axios";
import "./styles/article.css";

class Article extends React.Component {
    constructor() {
        super();
    }

    renderArticle() {
        if (!this.props.getArticle) {
            return null;
        }

        return (
            <div className="article-container">
                <div className="article-image">
                    <img src={this.props.getArticle.image} />
                </div>
                <div className="article-info">
                    <p>
                        {this.props.getArticle.description.trim("<p>", "</p>")}
                    </p>
                    <h2>{this.props.getArticle.name}</h2>

                    <span className="right-grid-article">
                        <span>
                            {this.props.getArticle.price.currency}{" "}
                            {this.props.getArticle.price.amount}
                        </span>
                    </span>
                    <button> add to cart </button>
                </div>
            </div>
        );
    }

    render() {
        return <div>{this.renderArticle()}</div>;
    }
}

function mapStateToProps(state) {
    console.log("mapstatetoprops article", state.getArticle);
    return {
        getArticle: state.getArticle
    };
}
export default connect(mapStateToProps)(Article);
