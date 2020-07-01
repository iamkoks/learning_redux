import React from 'react';
import Books from './components/Books'

function App() {
  return (
    <div className="container">
       <Books books={[1,2,3]}></Books>
    </div>
  );
}

export default App;
