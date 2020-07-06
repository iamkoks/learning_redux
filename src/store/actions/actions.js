import { CREATE_BOOK, GET_CAROUSEL} from "../types/types";

export function createBook(book) {
    return {
        type: CREATE_BOOK,
        payload: book
    }
}

export function getCarousel(carousel) {
    return {
        type: GET_CAROUSEL,
        payload: carousel
    }
}