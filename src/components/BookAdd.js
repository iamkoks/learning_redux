import React, { useState, useEffect } from 'react';

function BookEnd(){

        const[books, setBook] = useState(
        [
            {
                name: "Война и Мир"
            }
        ]
        )
        
        const[valueBook, setValueBook] = useState('');
        const [clickAdd, setAddClick] = useState(false);
        const [smShow, setSmShow] = useState(false);
        const [indexDelete, setIndexDelete] = useState(-1)
        const [indexChange, setIndexChange] = useState(-1)

        useEffect(() => {
            if (clickAdd && indexChange < 0) {
                books.push({
                    name: valueBook
                });
                setBook(books);
                setValueBook('');
                console.log(books.map(name => (name)))
            }
            else if(clickAdd && indexChange >= 0){
                books.splice(indexChange, 1, {name: valueBook})
                setBook(books);
                setIndexChange(-1);
                setValueBook('');
            }
            setAddClick(false);
        }, [clickAdd])

        useEffect(() => {
            if (indexDelete>=0) {
                books.splice(indexDelete, 1)
                setBook(books);
                setIndexDelete(-1);
            }
        }, [indexDelete])

        useEffect(() => {
            if (indexChange>=0) {
                setValueBook(books[indexChange].name)
            }
        }, [indexChange])

        const Add = () => {
            if(!valueBook)
            {
                return (
                    setSmShow(true)
                )
            }
            else
            {
                setAddClick(true)
            }
        }

            
    return(
        <div>
            <input value={valueBook} onChange={(e) => setValueBook(e.target.value)}></input>
            <button onClick={() => Add()}>{ (indexChange>=0) ? "Изменить" : "Добавить"}</button>
        </div>   
    )
}

export default BookEnd;