const initialState = {
    products: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Watermelon" },
    ],
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            const { id, name } = action.payload;
		    const exist = state.cart.find((item) => item.id === id);

            if(exist) {
                let productCart = state.cart.map(item =>
                    item.id === id ? {...exist, quantity: exist.quantity + 1} : item
                );

                return {
                    ...state,
                    cart: productCart
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {id: id, name: name, quantity: 1}]
                }
            }
        default:
            return state;
    }
}

export default reducer;