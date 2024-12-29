///* eslint-disable react/no-unescaped-entities */
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice= createSlice({
    name:"cart",
    initialState: {
        cart:[]
    },
    reducers: {
        addToCart: (state:any, action:any) => {
            const itemPresent=state.cart.find((item:any)=> item.id === action.payload.id);
            if(itemPresent){
                itemPresent.quantity++;
            } else {
                state.cart.push({...action.payload,quantity:1});
            }
            
    },
    removeFromCart: (state:any, action:any) => {
        const removeItem=state.cart.filter((item:any)=>item.id!==action.payload.id);
        state.cart=removeItem;
    },
    incrementQuantity:(state:any, action:any) => {
        const itemPresent=state.cart.find((item:any)=> item.id === action.payload.id
    );
    itemPresent.quantity++;
    },
    decrementQuantity: (state:any, action:any) => {
        const itemPresent=state.cart.find((item:any)=> item.id === action.payload.id
    );
    if(itemPresent.quantity===1){
        const removeItem=state.cart.filter((item:any)=>item.id!==action.payload.id);
        state.cart=removeItem;
    } else{
        itemPresent.quantity--;
    }
    },
    cleanCart:(state)=>{
        state.cart=[];
    }
},
});
export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity,cleanCart}= CartSlice.actions
export default CartSlice.reducer