import React from 'react'

const Book = (props) => {
   return (
       <div className="card">
           <div className="card-body">
                <h5 className="card-title">{props.book.name}</h5>
           </div>
       </div>
   ) 
}

export default Book