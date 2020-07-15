import React,{ useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Book from '../Book/Book'
import './Books.scss'
import { fetchBooks } from '../../store/actions/booksFetch'


export default () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.fetchBooks)
    useEffect(()=>{
        dispatch(fetchBooks())
    })

    return (
        <div className="books-card">
            {books.map((book, index) => <Book book={book} key={index}/>)}
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         myBook : state.books.books
//     }
// }

// export default connect(mapStateToProps, null)(Books)
