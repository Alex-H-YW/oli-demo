import React, { FC } from 'react';
import styles from "./Header.less";
import {Link} from 'react-router-dom';
import { Input } from 'antd';

const Header: FC = () => {
    const { Search } = Input;
    const onSearch = () => console.log();
  return (
    <div className={styles.headerContent}>
        <div className={styles.navLeft}>
            <ul className={styles.nav}>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Guides</a>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="#">API Reference</a> */}
                    <Link className="list-group-item" to="/reference">API Reference</Link> 
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Changelog</a>
                </li>
        </ul>
        </div>
        <div className={styles.navRight}>
            <Search placeholder="input search" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    </div>
  )
}
export default Header;
