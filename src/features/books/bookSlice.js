import { createSlice } from '@reduxjs/toolkit'
import items from '../../assets/books.json'


const initialState =[...items.list]


const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action)=> {
            state.push(action.payload)
        }
    }
})
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;