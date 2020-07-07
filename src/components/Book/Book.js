import React from 'react'
import { Card } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './Book.scss'

const { Meta } = Card;

const Book = (props) => {
   return (
    <div className="book-card">
        <Card
        hoverable
        cover={<img alt="example" src={props.book.cover} />}
    >
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        <Meta title={props.book.name} description={"Автор: "+props.book.author} />
    </Card>
    </div>
    
   ) 
}

export default Book
