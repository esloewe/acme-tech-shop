import React from "react";
import { connect } from "react-redux";
import { getArticle } from "./actions";
import axios from "axios";

class Article extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>article</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("mapstatetoprops article", state, state.article);
    return {
        article: state.article
    };
}
export default connect(mapStateToProps)(Article);
