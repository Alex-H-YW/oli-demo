import React, {FC} from 'react';
import styles from './SideBar.less';
import {SideBarData} from './SideBarData';
import { Link } from 'react-router-dom';


const SideBar: FC = () => {
  return (
    <div className={styles.sideBarContent}>
        <h3>WEB DATA API</h3>
        <ul>
            <li>
              {SideBarData.map((item, index)=> {
                  return (
                    <li key={index}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                            <button className={styles.btnGet}>GET</button>
                        </Link>
                      </li>
                    )
                    }
              )
            }
              
                
            </li>
  
        </ul>

    </div>
  )
}
export default SideBar;
