import { Input, Button } from 'antd';
import styles from "./Authentication.less";

export default function Authentication() {
  return (
    <div className={styles.AuthenContent}>
        <div className={styles.AuthenTitle}>
            <span>AUTHENTICATION</span>
            <div className={styles.tips}>
                <span>HEADER</span>
                <img src="https://img.icons8.com/windows/18/undefined/high-importance.png"/>
            </div>
        </div>
        <div className={styles.AuthenInput}>
            <Button>Header</Button>
            <Input placeholder='X-API-KEY'/>
        </div>
        
    </div>
  )
}
