import React from 'react'

import {
    GithubOutlined,
    MessageOutlined
} from '@ant-design/icons';
import { Typography, Tag } from 'antd';
import './Bottom.scss'

const { Text } = Typography;


const Bottom = () => {
    return (
        <footer className='footer'>
            <div className="link">
                <Tag icon={<GithubOutlined />} color="black">
                    <a href="https://github.com/iamkoks">GitHub</a>
                </Tag>
                <Text mark>created by iamkoksss</Text>
                <Tag icon={<MessageOutlined />} color="#55acee">
                    <a href="https://t.me/iamkoksss">Telegram</a>
                </Tag>
            </div>       
        </footer>
    ) 
}

export default Bottom
