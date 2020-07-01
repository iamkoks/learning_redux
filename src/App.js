import React from 'react';
import Books from './components/Books'
import BookAdd from './components/BookAdd'

function App() {
  return (
    <div className="container">
        <BookAdd></BookAdd>
        <Books books={[1,2,3]}></Books>
    </div>
  );
}

export default App;
