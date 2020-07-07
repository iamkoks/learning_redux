import {combineReducers} from 'redux'
import {booksReducer} from '../reducers/booksReducers'
import {carouselReducer} from '../reducers/carouselReducer'
import {modalReducer} from '../reducers/modalReducer'

export const reducer = combineReducers({
    books: booksReducer,
    carousels: carouselReducer,
    modal : modalReducer
})
