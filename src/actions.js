import axios from "axios";

export function catalog() {
    return axios.get(`http://challenge.monoqi.net/catalog`).then(resp => {
        return {
            type: "CATALOG",
            catalog: resp.data.articles
        };
    });
}

export function getArticle(sku) {
    return axios
        .get(`http://challenge.monoqi.net/article/${sku}`)
        .then(resp => {
            console.log("resp", resp);
            return {
                type: "ARTICLE",
                getArticle: resp.data
            };
        });
}
