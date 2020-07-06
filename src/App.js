import React from 'react';
import Books from './components/Books/Books'
import Header from './components/Header/Header';
import Bottom from './components/Bottom/Bottom';
import 'antd/dist/antd.css';

import './App.scss'


function App() {
  return (
    <div className="container">
        <Header></Header>
        <Books></Books>
        <Bottom></Bottom>
    </div>
  );
}

export default App;
