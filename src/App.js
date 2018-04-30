import React from "react";
import "./styles/app.css";
import { BrowserRouter, Route } from "react-router-dom";
import Catalog from "./catalog";
import Article from "./article";
import Cart from "./cart";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1 className="logo">Acme Tech Shop</h1>
                    <Route exact path="/" component={Catalog} />
                    <Route exact path="/article" component={Article} />
                    <Route path="/cart" component={Cart} />
                </div>
            </BrowserRouter>
        );
    }
}
