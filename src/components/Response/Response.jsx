import { useState} from 'react'
import styles from './Response.less'
import { List} from 'antd';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { BsFillRecordFill } from "react-icons/bs";
import { Modal } from 'antd';


const Response = ({apiInfo}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
    setIsModalVisible(true);
  };

    const handleOk = () => {
    setIsModalVisible(false);
  };

    const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log("RRRR",apiInfo.responseKey);
  return (
      
    <div className={styles.response}>
        <h3>Response</h3>
        <List className={styles.responseList}>
            <List.Item>
                <div className={styles.responseRow}>
                    <BsFillRecordFill className={styles.iconGreenCircle} />
                    <span>200</span>
                </div> 
                <div className={styles.responseModal} onClick={showModal}>
                    < AiOutlineArrowsAlt />
                </div>
            </List.Item>
            <List.Item>
                <div className={styles.responseRow}>
                    <BsFillRecordFill className={styles.iconRedCircle}/>
                    <span>400</span>
                </div> 
                <div className={styles.responseModal} onClick={showModal}>
                    < AiOutlineArrowsAlt />
                </div>
            </List.Item>
        </List>
        <Modal title="Response" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>
                <h4>RESPONSE BODY</h4>
                <div className={styles.modalContent}>
                    <span>
                        {apiInfo?.responsKey?.forEach(element => 
                            element
                        )}
                    </span>
                    
                   
                </div>
            </div>
            
        </Modal>
    </div>
  )
}
export default Response;
