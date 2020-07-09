import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Books from './components/Books/Books'
import Header from './components/Header/Header';
import Bottom from './components/Bottom/Bottom';
import BookCarousel from './components/Carousel/BookCarousel';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import './App.scss'
import BookAbout from './components/BookAbout/BookAbout';


function App() {
    return (
        <Router>
            <div className="container">
                <div>
                    <Header/>
                    <BackTop/>
                    <BookCarousel/>
                    <div className="container__routes">
                        <Route exact path='/' component={Books}/>
                        <Route path="/about/:bookId" component={BookAbout}/>
                    </div>
                </div>
                <Bottom/>
            </div>
        </Router>
    );
}

export default App;
