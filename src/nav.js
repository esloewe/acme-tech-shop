import React from "react";
import "./styles/nav.css";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <Link to="/">
                        <h1 className="logo">
                            Acme <span className="logo-2">tech shop</span>
                        </h1>
                    </Link>
                </div>
                <div>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart" />
                    </Link>
                </div>
            </div>
        );
    }
}

// <div>
//     <Link to="/catalog">catalog</Link>
// </div>
