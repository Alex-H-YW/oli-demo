import {FC, useContext} from 'react';
import styles from './SideBar.less';
import {SideBarData} from './SideBarData';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import DataContext from '../../Context';


const SideBar = () => {
  const apiList = useContext(DataContext)
  console.log(apiList);

  return (
    <div className={styles.sideBarContent}>
        <h3>WEB DATA API</h3>
        <ul>
            <li>
              {apiList.map(item => (
                <li key={item.id}>
                <Link to ={`/reference/?id=${item.id}`} className={styles.Links}>
                    <span>{item.name}</span>
                    <Button className={styles.btnGet}>GET</Button>
                </Link>
                </li>
                )      
              )
            }
              
                
            </li>
  
        </ul>

    </div>
  )
}
export default SideBar;
