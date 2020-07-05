import { CREATE_BOOK } from "./types"

const initialState = {
    books: []
}

export const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_BOOK: 
            return {...state, books: state.books.concat(action.payload)}
        default: return state
    }
    
}