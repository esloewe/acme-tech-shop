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
    console.log("actions add to cart", article, quantity);
    return {
        type: "ADD_TO_CART",
        itemsCart
    };
}

// export function cart(sku, quantity) {
//     return axios
//         .get(`http://challenge.monoqi.net/cart${(sku, quantity)}`)
//         .then(resp => {
//             return {
//                 type: "CART",
//                 cart: resp.data
//             };
//         })
//         .catch(error => {
//             error;
//         });
// }

// export function finalCart(sku, quantity) {
//     // lines: [
//     //     {
//     //         sku: "",
//     //         quantity: 1
//     //     }
//     // ];
//
//     return axios.put(`http://challenge.monoqi.net/cart/`).then(() => {
//         return {
//             type: "FINAL_CART"
//         };
//     });
// }
