import React from "react";
import "./styles/app.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./nav";
import Catalog from "./catalog";
import Article from "./article";
import Cart from "./cart";
import Checkout from "./checkout";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Route exact path="/" component={Catalog} />
                    <Route exact path="/article" component={Article} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                </div>
            </BrowserRouter>
        );
    }
}
