import { CREATE_BOOK, GET_BOOK_BY_ID } from "../types/books"
import { FETCH_BOOKS } from "../types/booksFetch"

const initialState = {
    fetchedBooks: [],
    bookById: null
}

export const booksReducer = (state = initialState, action) => {
    switch(action.type){
        // case CREATE_BOOK:
        //     return {...state, books: state.books.concat(action.payload)}
        case FETCH_BOOKS:
            return { ...state, fetchedBooks: action.payload}
        case GET_BOOK_BY_ID:
            return {...state, bookById: state.books.find(book => book.id === +action.payload)}

        default: return state
    }
}
