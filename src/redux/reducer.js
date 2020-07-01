import {combineReducers} from 'redux'
import {booksReducer} from './booksReducers'

export const reducer = combineReducers({
    books: booksReducer
})