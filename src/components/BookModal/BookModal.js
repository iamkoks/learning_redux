import React, {useState} from 'react';
import { Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


function BookModal(props){
    
    const[visibleModal, setVisibleModal] = useState(false);

    const showModal = () => {
        setVisibleModal(true)
    }

    const handleCancel = () => {
        setVisibleModal(false)
    }

    const handleOk = () => {
        setVisibleModal(false)
    }    
      
    return(
        <div>
            <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={() => showModal()}/>
            <Modal
            title={props.name}
            visible={visibleModal}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
            >
                <p>Автор: {props.author}</p>
            </Modal>
        </div>  
    )
}

export default BookModal;
