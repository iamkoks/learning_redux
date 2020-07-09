import React from 'react';
import {
    BrowserRouter as Switch,
    Route,
    HashRouter
  } from "react-router-dom";

import Books from './components/Books/Books'
import Header from './components/Header/Header';
import Bottom from './components/Bottom/Bottom';
import BookCarousel from './components/Carousel/BookCarousel';
import BookTitle from './components/BookTitle/BookTitle'
import AboutBook from './components/BookAbout/BookAbout'
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import './App.scss'


function App() {
    return (
        <HashRouter>
            <div className="container">
                <div>
                    <BackTop/>
                    <Header/>
                    <BookTitle 
                        className="mainTitle" 
                        type="code" 
                        text="Бестеллеры, которые стоит прочитать каждому!"
                    />
                    <BookCarousel/>
                    <Switch>
                        <Route path="/about">
                            <AboutBook/>
                        </Route>
                        <Route exact path="/">
                            <Books/>
                        </Route>
                    </Switch>  
                </div>
                
                <Bottom/>
            </div>
        </HashRouter>
    );
}

export default App;
