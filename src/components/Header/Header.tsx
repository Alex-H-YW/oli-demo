import React, { FC } from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import { Input } from 'antd';

const Header: FC = () => {
    const { Search } = Input;
    const onSearch = () => console.log();
  return (
    <div className='headerContent'>
        <div className='nav-left'>
            <ul className="nav">
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
        <div className='nav-right'>
        <Search placeholder="input search" onSearch={onSearch} style={{ width: 200 }} />

        </div>
    </div>
  )
}
export default Header;
