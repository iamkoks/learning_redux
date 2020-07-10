import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

import { Typography, Button, Card  } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './BookAbout.scss'
import { getBookById } from '../../store/actions/books'

const { Title, Text } = Typography;


const AboutBook = (props) => {
    useEffect(()=> {
        props.getBookById(props.match.params.bookId)
    }, [])

    return (
        <div className="about-book">
            <Card title={props.book?.name}>
                <div className="about-book-btn">
                    <Link to="/">
                        <Button
                            type="primary"
                            icon={<ArrowLeftOutlined />}
                        />
                    </Link>
                </div>
                <div className="about-book-content">
                    <img src={props.book?.cover} alt=""></img>
                    <div className="about-book-content-text">
                        {props.book?.about}
                        <Text strong>Автор: {props.book?.author}</Text>
                    </div>
                </div>
            </Card>
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
