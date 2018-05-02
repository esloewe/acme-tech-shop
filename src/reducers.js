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

    if (action.type == "ADD_TO_CART") {
        console.log("itemscarttttt reddd", action.itemsCart);
        if (!state.itemsCart) {
            state = {
                ...state,
                itemsCart: action.itemsCart
            };
        } else {
            console.log("a string else");
            itemsCart: state.itemsCart.filter(item => {
                item.article.sku != action.itemsCart[0].article.sku;
            });

            state = {
                ...state,
                itemsCart: state.itemsCart.concat(action.itemsCart)
            };
        }
    }

    localStorage.setItem("state", JSON.stringify(state));

    return state;
}
