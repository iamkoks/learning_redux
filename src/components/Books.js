import React from 'react'
import {connect} from 'react-redux'
import Book from './Book'


const Books = ({myBook}) => {
    if(!myBook.lenght){
        return <p>Книг пока что нет..</p>
    }
   return myBook.map((book, index) => <Book book={book} key={index}></Book>)
}

const mapStateToProps = state => {
    console.log(state)
    return {
        myBook : state.books.books
    }
}

export default connect(mapStateToProps, null)(Books)