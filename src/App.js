import React from 'react';
import Books from './components/Books/Books'
import Header from './components/Header/Header';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="container">
        <Header></Header>
        <Books></Books>
    </div>
  );
}

export default App;
