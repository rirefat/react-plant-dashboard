import React from 'react';
import './listing.css';
import img from '../../assets/plant2.png';
import img1 from '../../assets/plant1.png';
import img4 from '../../assets/plant4.png';
import img3 from '../../assets/plant6.png';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.jpg';
import user6 from '../../assets/user6.jpg';
import user7 from '../../assets/user7.jpg';

// Imported Icons
import { BsArrowRightShort, BsHeartFill, BsHeart } from 'react-icons/bs';

const listing = () => {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className='icon'></BsArrowRightShort>
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <BsHeartFill className='icon'></BsHeartFill>
                    <img src={img} alt="" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <BsHeart className='icon'></BsHeart>
                    <img src={img1} alt="" />
                    <h3>Coffee Plants</h3>
                </div>
                <div className="singleItem">
                    <BsHeart className='icon'></BsHeart>
                    <img src={img4} alt="" />
                    <h3>Button Fern</h3>
                </div>
                <div className="singleItem">
                    <BsHeartFill className='icon'></BsHeartFill>
                    <img src={img3} alt="" />
                    <h3>Spider Plant</h3>
                </div>
            </div>

            <div className="sellers flex">
                {/*======================================= Top Sellers =======================================*/}
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon'></BsArrowRightShort>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt="User Image" />
                            <img src={user2} alt="User Image" />
                            <img src={user3} alt="User Image" />
                            <img src={user4} alt="User Image" />
                            <img src={user5} alt="User Image" />
                            {/* <img src={user6} alt="User Image" /> */}
                            {/* <img src={user7} alt="User Image" /> */}
                        </div>
                        <div className="cardText">
                            <span>
                                14,556 Plants Sold <br />
                                <small>
                                    21 Sellers <span className="date">7 Days</span>                                    
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                {/*==================================== Featured Sellers ====================================*/}
                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon'></BsArrowRightShort>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            {/* <img src={user1} alt="User Image" /> */}
                            {/* <img src={user2} alt="User Image" /> */}
                            <img src={user3} alt="User Image" />
                            <img src={user4} alt="User Image" />
                            <img src={user5} alt="User Image" />
                            <img src={user6} alt="User Image" />
                            <img src={user7} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                35,556 Plants Sold <br />
                                <small>
                                    32 Sellers <span className="date">25 Days</span>                                    
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default listing;