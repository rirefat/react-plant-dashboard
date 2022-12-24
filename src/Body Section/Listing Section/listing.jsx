import React from 'react';
import './listing.css';
import img from '../../assets/plant2.png';
import img1 from '../../assets/plant1.png';
import img4 from '../../assets/plant4.png';
import img3 from '../../assets/plant6.png';
import user1 from '../../assets/user1.jpg';

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
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon'></BsArrowRightShort>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt="" />
                        </div>
                        <div className="cardText">
                            <span>14.556 Plants Sold</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default listing;