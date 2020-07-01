import React from 'react'
import {connect} from 'react-redux'
import Book from './Book'


const Books = ({books}) => {
   return books.map((book, index) => <Book book={book} key={index}></Book>)
}

const mapStateToProps = state => {
    console.log(state)
    return {
        syncBook : state.books.books
    }
}

export default connect(mapStateToProps, null)(Books)