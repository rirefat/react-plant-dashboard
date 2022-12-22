import React from 'react';
import './sidebar.css';
import logo from '../assets/logo.png'
import { BsSpeedometer } from "react-icons/bs";

const sidebar = () => {
    return (
        <div className='sideBar grid'>
            <div className="logoDiv flex">
                <img src={logo} alt="" />
                <h2>Planti.</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">QUICK MENU</h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex"><BsSpeedometer className='icon'/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default sidebar;