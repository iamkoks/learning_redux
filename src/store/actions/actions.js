import { CREATE_BOOK } from "../types/types";

export function createBook(book) {
    return {
        type: CREATE_BOOK,
        payload: book
    }
}
