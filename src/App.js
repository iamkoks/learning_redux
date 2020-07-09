import React from 'react';

import Books from './components/Books/Books'
import Header from './components/Header/Header';
import Bottom from './components/Bottom/Bottom';
import BookCarousel from './components/Carousel/BookCarousel';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import './App.scss'


function App() {
    return (
        <div className="container">
            <div>
                <BackTop/>
                <Header/>
                <BookCarousel/>
                <Books/>
            </div>
        
            <Bottom/>
        </div>
    );
}

export default App;
