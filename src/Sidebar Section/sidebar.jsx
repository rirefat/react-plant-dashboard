import React from 'react';
import './sidebar.css';
import logo from '../assets/logo.png'
import { BsSpeedometer, BsTrophy } from "react-icons/bs";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";

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
                        <a href="#" className="menuLink flex">
                            <BsSpeedometer className='icon'/>
                            <span className="smallText">Dash Board</span>
                        </a>                        
                    </li>
                    
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdDeliveryDining className='icon'/>
                            <span className="smallText">My Orders</span>
                        </a>
                    </li>
                    
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdOutlineExplore className='icon'/>
                            <span className="smallText">Explore</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BsTrophy className='icon'/>
                            <span className="smallText">Products</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default sidebar;