import React from "react";
import "./styles/nav.css";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <h1 className="logo">Acme</h1>
                </div>
                <i className="fas fa-shopping-cart" />
            </div>
        );
    }
}
