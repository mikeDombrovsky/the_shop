import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProducts: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            let product = state.cartProducts.find(p => p.id === action.payload.id);
            if (product) {
                product.count++;
            } else {
                state.cartProducts.push({...action.payload, count: 1});
            }
            state.total = getTotal(state);
        },
        incCount: (state, action) => {
            let product = state.cartProducts.find(p => p.id === action.payload);
            product.count++;
            state.total = getTotal(state);
        },
        decCount: (state, action) => {
            let product = state.cartProducts.find(p => p.id === action.payload);
            if (product.count > 1) {
                product.count--;
            } else {
                state.cartProducts = state.cartProducts.filter(p => p.id !== action.payload);
            }
            state.total = getTotal(state);
        },
        setCount: (state, action) => {
            console.log(action.payload);
            let product = state.cartProducts.find(p => p.id === action.payload.id);
            product.count = action.payload.count;
            state.total = getTotal(state);
        },
        removeFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(p => p.id !== action.payload);
            state.total = getTotal(state);
        },
    }
})

const getTotal = (state) => {
    let contacts = [...state.cartProducts];
    let totals = contacts.map(p => p.count * p.price);
    return totals.reduce((sum, num) => sum + num, 0);

}

export const {addToCart, incCount, decCount, setCount, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;