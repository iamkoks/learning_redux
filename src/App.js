import React from 'react';
import Books from './components/Books'
import BookAdd from './components/BookAdd'

function App() {
  return (
    <div className="container">
        <BookAdd></BookAdd>
        <Books></Books>
    </div>
  );
}

export default App;
