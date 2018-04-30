import React from "react";
import axios from "axios";
import "./styles/catalog.css";

export default class Catalog extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        axios.get(`http://challenge.monoqi.net/catalog`).then(resp => {
            const articles = resp.data.articles.map(article => (
                <div key={article.sku} className="cat-article-container">
                    <img src={article.image} alt="" />
                    <h2 id="cat-article-name">{article.name}</h2>
                    <span id="cat-article-price">
                        {article.price.currency} {article.price.amount}
                    </span>
                </div>
            ));
            this.setState({ articles });
        });
    }

    render() {
        return (
            <div>
                <div className="container-catalog">{this.state.articles}</div>
            </div>
        );
    }
}
