import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const Book = (props) => {
   return (
    <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props.book.cover} />}
    >
        <Meta title={props.book.name} description={"Автор: "+props.book.author} />
    </Card>
   ) 
}

export default Book
