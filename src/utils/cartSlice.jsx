import { createSlice } from "@reduxjs/toolkit";

const cart=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:
    {
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state)=>
        {
            state.items.pop()
        },
        clearCart:(state)=>
        {
            state.items.length=0                
        }
    }
})
export default cart.reducer
export const {addItem,removeItem,clearCart}= cart.actions