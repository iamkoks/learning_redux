import React from 'react'
import { PageHeader } from 'antd';
import book from '../../image/book.png'

import "./Header.scss"

const Header = () => {
   return (
    <div className="header">
        <PageHeader
        avatar={{src: book}}
        className="site-page-header"
        title="Библиотека"
        subTitle="Читать, это круто!"
        >
        </PageHeader> 
    </div>
    
   ) 
}

export default Header
