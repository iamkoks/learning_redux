import {combineReducers} from 'redux'
import {booksReducer} from '../reducers/booksReducers'

export const reducer = combineReducers({
    books: booksReducer
})