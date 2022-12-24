import React from 'react';
import './top.css';
import img from '../../assets/rafiul_refat.jpg'
import video from '../../assets/plant.mp4'

// Imported Icons
import { BsSearch } from 'react-icons/bs';
import { TbMessageCircle } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';

const top = () => {
    return (
        <div className="topSection">
            {/*=================================== Header Section ===================================*/}
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

            {/*=================================== Card Section ====================================*/}
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                    <p>The world's first growing industry today are natural made products!</p>

                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default top;