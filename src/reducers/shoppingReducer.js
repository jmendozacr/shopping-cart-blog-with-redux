const initialState = {
    products: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Watermelon" },
    ],
    cart: []
}

const reducer = (state = initialState, dispatch) => {
    return state;
}

export default reducer;