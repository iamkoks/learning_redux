import React from 'react'
import { Link } from "react-router-dom";

import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
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
                <Link to={`/about/${props.book.id}`}>
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                    />
                </Link>
                <Meta
                    title={props.book.name}
                    description={"Автор: "+props.book.author}
                />
            </Card>
        </div>
    )
}

export default Book
