import React from 'react'
import { Card } from 'antd';

import './Book.scss'

const { Meta } = Card;

const Book = (props) => {
   return (
    <div className="book-card">
        <Card
        hoverable
        cover={<img alt="example" src={props.book.cover} />}
    >
        <Meta title={props.book.name} description={"Автор: "+props.book.author} />
    </Card>
    </div>
    
   ) 
}

export default Book
