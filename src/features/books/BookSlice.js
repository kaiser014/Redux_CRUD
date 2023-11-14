import { createSlice } from "@reduxjs/toolkit";


const {v4: uuidv4} = require("uuid");

const initialBooks = {
    books : [
        {
            id: uuidv4(),
            title: "Love Bangladesh",
            author: "Abu Kaiser"
        },
        {
            id: uuidv4(),
            title: "Bangladeshi",
            author: "Kaiser"
        },
    ]
};

export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers : {
        showBooks : (state) => {
            return state;
        },
        addBooks : (state, action) => {
            state.books.push(action.payload);
        },
        updateBooks : (state, action) => {
            const {id, title, author} = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        deleteBook : (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        },
    }
});


export const {showBooks, addBooks, deleteBook, updateBooks} = bookSlice.actions;

export default bookSlice.reducer;