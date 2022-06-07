import {FC, useContext} from 'react';
import styles from './SideBar.less';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import DataContext from '../../Context';
//import { IApiList } from '../../../interface/interface'

const SideBar: FC = () => {
  const apiList:any = useContext(DataContext);

  return (
    <div className={styles.sideBarContent}>
        <h3>WEB DATA API</h3>
        <ul>
          {apiList.map((item:{id:number, name:string}) => (
            <li key={item.id}>
              <Link to ={`/reference/?id=${item.id}`} className={styles.Links}>
                <span>{item.name}</span>
                <Button className={styles.btnGet}>GET</Button>
              </Link>
            </li>
            )      
            )
          }   
        </ul>

    </div>
  )
}
export default SideBar;
