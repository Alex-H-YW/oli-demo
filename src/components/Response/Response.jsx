
import styles from './Response.less'
import { BsFillRecordFill } from "react-icons/bs";
import ReactJson from 'react-json-view';
import { isEmpty } from 'lodash';

export default function Response({response}) {
 
  return (
    <div className={styles.Res}>
        <div className={styles.ResTitle}>
            <span>RESPONSE</span>
        </div>
        {isEmpty(response)?
            <div className={styles.ResContent}>
                <div className={styles.ResText}>
                    <span>Click <code>Try It!</code> to start a request and see the response here!</span>
                    <span>Or choose an example:</span>
                </div>
                <div className={styles.ResCircle}>
                    <div>
                        <BsFillRecordFill className={styles.iconGreenCircle} />
                        <span>200 - Result</span>
                    </div>
                    <div>
                        <BsFillRecordFill className={styles.iconRedCircle}/>
                        <span>400 - Result</span>
                    </div>
                </div>
            </div> :
            <div className={styles.ResContent}>
                <ReactJson src={response}/>
            </div>

        }



    </div>
  )
}
