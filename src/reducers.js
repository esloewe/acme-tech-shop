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

    if (action.type === "GET_CART") {
        let cartUpdated;
        if (state.itemsCart.length >= 1) {
            console.log("if in getCart");
            cartUpdated = state.itemsCart.filter(item => {
                item.sku, item.quantity;
            });
            state = {
                ...state,
                getCart: action.getCart.concat(cartUpdated)
            };
        } else {
            console.log("else in getCart");
            state = {
                ...state,
                getCart: action.getCart
            };
        }
        console.log("cartUpdated", cartUpdated, action.getCart);
    }

    localStorage.setItem("state", JSON.stringify(state));

    return state;
}