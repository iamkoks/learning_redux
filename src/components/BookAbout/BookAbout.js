import React from 'react'
import { Link } from "react-router-dom";

import { Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './BookAbout.scss'

const { Title, Text } = Typography;


const AboutBook = () => {
    return (
        <div className="about-book">
            <Button 
                type="primary" 
                icon={<ArrowLeftOutlined />} 
            >
                <Link to="/">Вернуться</Link>
            </Button>
            <div>
                <Title>Название книги</Title>
                <img src="https://s3-goods.ozstatic.by/2000/784/582/10/10582784_0.jpg"></img>
                <Text>О книге</Text>
                <Text>Автор</Text>
            </div>
        </div>
    )     
}

export default AboutBook
