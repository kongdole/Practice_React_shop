import { createSlice } from "@reduxjs/toolkit";


let user = createSlice({
    name: 'user',
    initialState: {name:'kim',age:20},
    reducers:{
        changeName(state ){
            state.name='park';
        },
        increase2(state,action){
            state.age+=action.payload;
        }
    }

})

export let {changeName,increas2} = user.actions;

export default user;