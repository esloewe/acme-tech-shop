export default function reducer(state = {}, action) {
    if (action.type === "CATALOG") {
        state = {
            ...state,
            catalog: action.catalog
        };
    }

    if (action.type === "ARTICLE") {
        state = {
            ...state,
            getArticle: action.getArticle
        };
    }

    if (action.type === "ADD_TO_CART") {
        state = {
            ...state,
            itemsCart: action.itemsCart
        };
        console.log("reducers addtocart", action.itemsCart);
    }

    // if (action.type === "CART") {
    //     state = {
    //         ...state,
    //         cart
    //     };
    // }

    return state;
}
