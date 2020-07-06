import {combineReducers} from 'redux'
import {booksReducer} from '../reducers/booksReducers'
import {carouselReducer} from '../reducers/carouselReducer'

export const reducer = combineReducers({
    books: booksReducer,
    carousels: carouselReducer
})
