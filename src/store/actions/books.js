import { CREATE_BOOK,
    GET_BOOK_BY_ID } from "../types/books";

export function createBook(book) {
    return {
        type: CREATE_BOOK,
        payload: book
    }
}

export function getBookById(bookId) {
    return {
        type: GET_BOOK_BY_ID,
        payload: bookId
    }
}