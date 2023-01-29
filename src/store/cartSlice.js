import { createSlice } from "@reduxjs/toolkit";



let cart = createSlice({
    name: 'cart',
    initialState: [
    ],
    reducers: {
        increase(state, action) {
            let a = state.findIndex((state) => { return state.id === action.payload })
                state[a].count += 1;
        },
        decrease(state, action) {
            let a = state.findIndex((state) => { return state.id === action.payload })
            if (state[a].count > 1) {
                state[a].count -= 1;
            }
        },
        addOrder(state, action) {
            state.push(action.payload);
        }
    }
})

export let { increase, decrease, addOrder} = cart.actions;

export default cart;