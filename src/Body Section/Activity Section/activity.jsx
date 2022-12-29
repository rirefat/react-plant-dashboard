import React from 'react';
import './activity.css';

// Imported Icons
import { AiOutlineArrowRight } from 'react-icons/ai';

// Imported Images
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.jpg';
import user6 from '../../assets/user6.jpg';
import user7 from '../../assets/user7.jpg';

const activity = () => {
    return (
        <div className='activitySection'>
            <div className="heading flex">
                <h1>Recent Activity</h1>
                <button className="btn flex">
                    See All 
                    <AiOutlineArrowRight className='icon'></AiOutlineArrowRight>
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user1} alt="Customer Img" />
                    <div className="customerDetails">
                        <span className="name">Ola Martin</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user2} alt="Customer Img" />
                    <div className="customerDetails">
                        <span className="name">Jack Smith</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user7} alt="Customer Img" />
                    <div className="customerDetails">
                        <span className="name">John Doe</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user6} alt="Customer Img" />
                    <div className="customerDetails">
                        <span className="name">Daniel Martin</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>
        </div>
    );
};

export default activity;