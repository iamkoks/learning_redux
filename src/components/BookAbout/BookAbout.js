import React from 'react'
import { Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Text } = Typography;


const AboutBook = () => {
    return (
                    <div className="about-book">
                        <Button 
                            type="primary" 
                            icon={<ArrowLeftOutlined />} 
                        >
                            <Link to="/">Вернуться</Link>
                        </Button>
                        <Text code>Название книги</Text>
                    </div>
       
    )     
}

export default AboutBook
