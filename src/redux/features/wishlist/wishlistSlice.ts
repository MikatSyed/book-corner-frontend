import { IBook } from "@/types/globalTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IwishList{
    books : IBook[];
    total: number
}

const initialState: IwishList = {
    books: [],
    total: 0
}

const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addTowishList: (state,action:PayloadAction<IBook>)=>{
            const existing = state.books.find((product)=> product._id === action.payload._id)
            if(existing){
            existing.quantity! +=  1
            }else{
            state.books.push({...action.payload,quantity:1})
            }
            state.total += action.payload.price;
        },
        removeByOne:(state,action:PayloadAction<IBook>)=>{
            const existing = state.books.find((product)=> product._id === action.payload._id)
            if(existing && existing.quantity! > 1){
            existing.quantity! -=  1
            }else{
                state.books = state.books.filter((product)=> product._id !== action.payload._id)
            }
            state.total -= action.payload.price;
        },
        removeFromwishList:(state,action:PayloadAction<IBook>)=>{
        state.books = state.books.filter((product)=> product._id !== action.payload._id);
        state.total -= action.payload.price * action.payload.quantity! || 0;
        }
        
    }
})

export const  {addTowishList,removeFromwishList,removeByOne}  = wishListSlice.actions;

export default wishListSlice.reducer;