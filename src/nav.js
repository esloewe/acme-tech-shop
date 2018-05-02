import React from "react";
import "./styles/nav.css";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <Link to="/">
                        <h1 className="logo">Acme</h1>
                    </Link>
                </div>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart" />
                </Link>
            </div>
        );
    }
}
