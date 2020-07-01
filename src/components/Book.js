import React from 'react'

const Book = ({book}) => {
   return (
       <div className="card">
           <div className="card-body">
                <h5 className="card-title">Title here{book.title}</h5>
           </div>
       </div>
   ) 
}

export default Book