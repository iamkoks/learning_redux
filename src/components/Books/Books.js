import React from 'react'
import {connect} from 'react-redux'
import Book from '../Book/Book'

import './Books.scss'


const Books = ({myBook}) => {
    if(!myBook.length){
        return <p>Книг пока что нет..</p>
    }
    return <div className="book-list">
        {myBook.map((book, index) => <Book book={book} key={index}></Book>)}
    </div>
}

const mapStateToProps = state => {
    return {
        myBook : state.books.books
    }
}

export default connect(mapStateToProps, null)(Books)
