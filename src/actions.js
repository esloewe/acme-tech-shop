import axios from "axios";

export function catalog() {
    return axios
        .get(`http://challenge.monoqi.net/catalog`)
        .then(resp => {
            return {
                type: "CATALOG",
                catalog: resp.data.articles
            };
        })
        .catch(error => {
            console.log(error);
        });
}

export function getArticle(sku) {
    return axios
        .get(`http://challenge.monoqi.net/article/${sku}`)
        .then(resp => {
            return {
                type: "ARTICLE",
                getArticle: resp.data
            };
        })
        .catch(error => {
            console.log(error);
        });
}

export function addToCart(article, quantity) {
    const itemsCart = [
        {
            article,
            quantity
        }
    ];

    return {
        type: "ADD_TO_CART",
        itemsCart
    };
}

export function removeFromCart(sku) {
    return {
        type: "REMOVE_FROM_CART",
        sku
    };
}

export function finalCart(sku, qty) {
    console.log("final cart in actions", sku, qty);
    return axios
        .put(`http://challenge.monoqi.net/cart${sku}${qty}`)
        .then(resp => {
            return {
                type: "FINAL_CART",
                finalCart: resp.data
            };
        })
        .catch(error => {
            console.log(error);
        });
}
