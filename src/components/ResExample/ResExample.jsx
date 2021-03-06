import { useState} from 'react'
import styles from './ResExample.less'
import { List} from 'antd';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { BsFillRecordFill } from "react-icons/bs";
import { Modal } from 'antd';


const ResExample = ({apiInfo}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modelShow, setModelShow] = useState();

    const showModal = (value) => {
        setIsModalVisible(true);
        setModelShow(value);
        };

    const handleOk = () => {
    setIsModalVisible(false);
  };

    const handleCancel = () => {
    setIsModalVisible(false);
  };

  //console.log("RRRR",apiInfo.responseKey.map((item)=>(item)));
  return (
      
    <div className={styles.response}>
        <h3>Response</h3>
        <List className={styles.responseList}>
            <List.Item>
                <div className={styles.responseRow}>
                    <BsFillRecordFill className={styles.iconGreenCircle} />
                    <span>200</span>
                </div> 
                <div className={styles.responseModal} onClick={()=>showModal(true)}>
                    < AiOutlineArrowsAlt />
                </div>
            </List.Item>
            <List.Item>
                <div className={styles.responseRow}>
                    <BsFillRecordFill className={styles.iconRedCircle}/>
                    <span>400</span>
                </div> 
                <div className={styles.responseModal} onClick={()=> showModal(false)}>
                    < AiOutlineArrowsAlt />
                </div>
            </List.Item>
        </List>
        <Modal title="Response" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>
                <h4>RESPONSE BODY</h4>
                <div className={styles.modalContent}>
                    {modelShow? (apiInfo.responseKey.map(
                        (item, index) => (
                            <ul>
                                <li key={index}>{item}</li>
                            </ul>
                        )        
                                )
                    ):<span>"error"</span>}
                </div>
            </div>
            
        </Modal>
    </div>
  )
}
export default ResExample;
