import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState:{
        products:[
        {
            id:123,
            title:'Product 1',
            desc: 'Description',
            price:100
        },
        {
            id:324,
            title:'Product 2',
            desc: 'Description',
            price:130
        },
        {
            id:234,
            title:'Product 3',
            desc: 'Description',
            price:80
        },
        {
            id:543,
            title:'Product 4',
            desc: 'Description',
            price:200
        },
        {
            id:678,
            title:'Product 5',
            desc: 'Description',
            price:170
        },
        {
            id:679,
            title:'Product 6',
            desc: 'Description',
            price:120
        }
    ]
    },
    reducers: {
        getProducts: state => state.products
    }
})

export const {getProducts} = productSlice.actions;

export default productSlice.reducer;