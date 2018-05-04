let initialState = JSON.parse(localStorage.getItem("state"));

export default function reducer(state = initialState || {}, action) {
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
        if (!state.itemsCart) {
            state = {
                ...state,
                itemsCart: action.itemsCart
            };
        } else {
            state = {
                ...state,
                itemsCart: state.itemsCart.concat(action.itemsCart)
            };
        }
    }

    if (action.type === "REMOVE_FROM_CART") {
        state = {
            ...state,
            itemsCart: state.itemsCart.filter(item => {
                return item.article.sku !== action.sku;
            })
        };
    }

    if (action.type === "GET_CART") {
        console.log("updatecart", action.updateCart);
        state = {
            ...state,
            getCart: action.getCart
        };
    }

    if (action.type === "FINAL_CART") {
        console.log("action final cart in reducer", action.finalCart);
        state = {
            ...state,
            finalCart: state.updateCart.concat(action.finalCart)
        };
    }

    localStorage.setItem("state", JSON.stringify(state));

    return state;
}
