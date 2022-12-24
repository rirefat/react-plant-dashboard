import React from 'react';
import './top.css';
import img from '../../assets/rafiul_refat.jpg'

// Imported Icons
import { BsSearch } from 'react-icons/bs';
import { TbMessageCircle } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';

const top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Planti.</h1>
                    <p>Hello, Rafiul. Welcome Back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" name="" id="" placeholder='Search Dashboard'/>
                    <BsSearch className='icon'></BsSearch>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon'></TbMessageCircle>
                    <IoMdNotificationsOutline className='icon'></IoMdNotificationsOutline>
                    <div className="adminImage">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default top;