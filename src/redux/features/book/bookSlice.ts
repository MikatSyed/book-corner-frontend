import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IBook {
    genres: string[];
    yearRange: number;
   
}

const initialState: IBook = {
    genres: [],
    yearRange: 0,
  
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<string>) => {
            const isExist = state.genres.find(genre => genre === action.payload);

            if (isExist) {
                state.genres = state.genres.filter(genre => genre !== action.payload);
            } else {
                state.genres.push(action.payload);
            }
        },
        setYearRange: (state, action: PayloadAction<number>) => {
            state.yearRange = action.payload;
          },
      
    },
});

export const { setGenre,setYearRange } = bookSlice.actions;

export default bookSlice.reducer;