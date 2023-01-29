import { configureStore, createSlice2 } from '@reduxjs/toolkit'
import user from './store/userSlice'
import cart from './store/cartSlice'






export default configureStore({
    reducer: {
        
        cart: cart.reducer,
        user : user.reducer
    }
}) 