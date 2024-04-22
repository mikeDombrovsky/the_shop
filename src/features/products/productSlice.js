import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            {
                id: 123,
                title: 'Pizza classic',
                desc: 'Pizza classic with tomato sauce, mozzarella, ham, mushrooms, olives, oregano, basil, garlic, and olive oil.',
                price: 10,
                img_src: 'https://user36270.clients-cdnnow.ru/1700231663321-800x577.webp'
            },
            {
                id: 324,
                title: 'Pizza four cheese',
                desc: 'Pizza four cheese with tomato sauce, mozzarella, gorgonzola, parmesan, and dor blue cheese.',
                price: 13,
                img_src: 'https://user36270.clients-cdnnow.ru/1700220117101-800x577.webp'
            },
            {
                id: 234,
                title: 'Pizza pepperoni',
                desc: 'Pizza pepperoni with tomato sauce, mozzarella, pepperoni, and oregano.',
                price: 11,
                img_src: 'https://user36270.clients-cdnnow.ru/1706628343167-800x577.webp'
            },
            {
                id: 543,
                title: 'Pizza carbonara',
                desc: 'Pizza carbonara with tomato sauce, mozzarella, bacon, parmesan, and egg.',
                price: 15,
                img_src: 'https://user36270.clients-cdnnow.ru/1700231451382-800x577.webp'
            },
            {
                id: 678,
                title: 'Pizza marseillaise',
                desc: 'Pizza marseillaise with tomato sauce, mozzarella, mussels, squid, shrimp, and garlic.',
                price: 17,
                img_src: 'https://user36270.clients-cdnnow.ru/1700231847779-800x577.webp'
            },
            {
                id: 679,
                title: 'Pizza margherita',
                desc: 'Pizza margherita with tomato sauce, mozzarella, and basil.',
                price: 12,
                img_src: 'https://user36270.clients-cdnnow.ru/1700231928511-800x577.webp'
            }
        ]
    },
    reducers: {
        getProducts: state => state.products
    }
})

export const {getProducts} = productSlice.actions;

export default productSlice.reducer;