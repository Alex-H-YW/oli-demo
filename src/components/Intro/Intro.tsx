import {FC} from 'react'
import { Button } from 'antd';
import styles from './Intro.less'

const Intro :FC= ({apiInfo}:any) => {

  return (
    <div className={styles.introCotent}>
        <h1>{apiInfo.name}</h1>
        <div className={styles.urlContent}>
            <Button className={styles.btnGet}>GET</Button>
            <span> https://api.finmarketdata.com/{apiInfo.url}</span>
            <h3>{apiInfo.description}</h3>
        </div>
    </div>
  )
}
export default Intro;
