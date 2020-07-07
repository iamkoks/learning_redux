import { CREATE_BOOK, GET_CAROUSEL, GET_MODAL} from "../types/types";

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

export function getModal(modal) {
    return {
        type: GET_MODAL,
        payload: modal
    }
}
