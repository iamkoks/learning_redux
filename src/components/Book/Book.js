import React from 'react'

import { Card } from 'antd';
import BookModal from '..//BookModal/BookModal'
import './Book.scss'

const { Meta } = Card;


const Book = (props) => {
    return (
        <div className="book-card">
            <Card
                hoverable
                cover={<img alt="example" src={props.book.cover} />}
            >
                <BookModal 
                    name={props.book.name} 
                    author={props.book.author} 
                    about={props.book.about}
                />
                <Meta 
                    title={props.book.name} 
                    description={"Автор: "+props.book.author} 
                />
            </Card>
        </div>
    )
}

export default Book
