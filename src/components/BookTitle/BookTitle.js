import React from 'react'
import './BookTitle.scss'
import { Typography } from 'antd';

const { Text } = Typography;


const BookTitle = (props) => {
    return (
        <div className="mainTitle">
            <Text code>{props.text}</Text>
        </div>
    )     
}

export default BookTitle
