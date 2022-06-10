import {FC, useContext, useState } from 'react';
import styles from './SideBar.less';
import { NavLink } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import DataContext from '../../Context';
import { useLocation } from 'react-router-dom';
//import { IApiList } from '../../../interface/interface'

const SideBar: FC = ({mobile}:any) => {
  const apiList:any = useContext(DataContext); 
  const path = useLocation().search.split('=')[1];
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
    {
      !mobile && (
        <div className={styles.sideBarContent}>
          <h3>WEB DATA API</h3>
          <ul>
            {apiList.map((item:{id:number, name:string}) => (
              <li key={item.id}>
                <NavLink to ={`/reference/?id=${item.id}`} className={Number(path) === item.id? styles.LinksActive : styles.Links}>
                  <span>{item.name}</span>
                  <Button className={styles.btnGet}>GET</Button>
                </NavLink>
              </li>
              )      
              )
            }   
          </ul>
        </div>
      )
    } 
    </>
  )
}
export default SideBar;
