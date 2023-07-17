import { IBook } from "@/types/globalTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

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
            const existing = state.books.find((book)=> book._id === action.payload._id)
            if(existing){
            toast.error("Already Added in Wishlist",{id:"addToWishList"})
            }else{
            state.books.push({...action.payload})
            }
            
        },
        removeByOne:(state,action:PayloadAction<IBook>)=>{
            const existing = state.books.find((book)=> book._id === action.payload._id)
            if(existing && existing.quantity! > 1){
            existing.quantity! -=  1
            }else{
                state.books = state.books.filter((book)=> book._id !== action.payload._id)
            }
            state.total -= action.payload.price;
        },
        removeFromwishList:(state,action:PayloadAction<IBook>)=>{
        state.books = state.books.filter((book)=> book._id !== action.payload._id);
        }
        
    }
})

export const  {addTowishList,removeFromwishList,removeByOne}  = wishListSlice.actions;

export default wishListSlice.reducer;