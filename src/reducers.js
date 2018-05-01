export default function reducer(state = {}, action) {
    if (action.type === "CATALOG") {
        state = {
            ...state,
            catalog: action.catalog
        };
    }

    if (action.type === "ARTICLE") {
        console.log("state.catalog article", action.article);
        state = {
            ...state,
            article: action.article
        };
    }
    return state;
}
