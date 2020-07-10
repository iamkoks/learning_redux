import { FETCH_BOOKS } from "../types/books"

export function fetchBooks(){
    return async dispatch => {
        const response = await fetch('http://localhost:3000/books')
        const json = await response.json()
        dispatch({ type: FETCH_BOOKS, payload: json})
    }
}