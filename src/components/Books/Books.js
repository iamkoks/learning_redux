import React from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Switch,
    Route,
    HashRouter
  } from "react-router-dom";

import BookAbout from '../BookAbout/BookAbout'
import Book from '../Book/Book'
import './Books.scss'


const Books = ({ myBook }) => {
    if(!myBook.length){
        return <p>Книг пока что нет..</p>
    }
    return (
        <HashRouter>
            <Switch>
                <Route path="/about">
                    <BookAbout/>
                </Route>
                <Route exact path="/">
                    <div className="books-card">
                        {myBook.map((book, index) => <Book book={book} key={index}/>)}
                    </div> 
                </Route>
            </Switch>
        </HashRouter>
    )
}

const mapStateToProps = state => {
    return {
        myBook : state.books.books
    }
}

export default connect(mapStateToProps, null)(Books)
