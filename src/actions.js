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

// export function getCart() {
//     return axios
//         .get(`http://challenge.monoqi.net/cart`)
//         .then(resp => {
//             return {
//                 type: "GET_CART",
//                 getCart: resp.data
//             };
//         })
//         .catch(error => {
//             error;
//         });
// }
