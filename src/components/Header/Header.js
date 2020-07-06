import React from 'react'
import { PageHeader } from 'antd';
import book from '../../image/book.png'

import './Header.scss';

const Header = () => {
   return (
    <PageHeader
    avatar={{src: book}}
    className="site-page-header"
    title="Библиотека"
    subTitle="Читать, это круто!"
    >
    </PageHeader> 
   ) 
}

export default Header
