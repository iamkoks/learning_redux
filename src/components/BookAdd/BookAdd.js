import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { createBook } from '../../store/actions/actions';

function BookAdd(props){
        
        const[valueBook, setValueBook] = useState('');
        const [clickAdd, setAddClick] = useState(false);
        const [smShow, setSmShow] = useState(false);
        const [indexDelete, setIndexDelete] = useState(-1)
        const [indexChange, setIndexChange] = useState(-1)

        useEffect(() => {
            if (clickAdd && indexChange < 0) {
                setValueBook('');
                props.createBook({
                    name: valueBook
                })
            }
            setAddClick(false);
        }, [clickAdd])

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
const mapDispatchToProps = {
    createBook: createBook
}

export default connect(null, mapDispatchToProps)(BookAdd);
