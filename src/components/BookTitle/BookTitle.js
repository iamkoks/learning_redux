import React from 'react'
import './BookTitle.scss'
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;

const BookTitle = (props) => {
return  <div className="mainTitle"><Text code>{props.text}</Text></div>
}

export default BookTitle