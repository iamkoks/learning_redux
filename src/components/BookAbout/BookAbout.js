import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

import { Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './BookAbout.scss'
import { getBookById } from '../../store/actions/actions'

const { Title, Text } = Typography;


const AboutBook = (props) => {
    useEffect(()=> {
        props.getBookById(props.match.params.bookId)
    }, [])

    return (
        <div className="about-book">
            <Link to="/">
                <Button
                    type="primary"
                    icon={<ArrowLeftOutlined />}
                />
            </Link>
            <div>
                <Title>{props.book?.name}</Title>
                <img src={props.book?.cover} alt=""></img>
                <Text>{props.book?.about}</Text>
                <Text>{props.book?.author}</Text>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getBookById

}

const mapStateToProps = state => {
    return {
        book : state.books.bookById
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutBook)
