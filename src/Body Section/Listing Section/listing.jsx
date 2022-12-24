import React from 'react';
import './listing.css';
import img from '../../assets/plant2.png';

// Imported Icons
import { BsArrowRightShort,BsHeartFill } from 'react-icons/bs';

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
                    <BsHeartFill className='icon'></BsHeartFill>
                    <img src={img} alt="" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <BsHeartFill className='icon'></BsHeartFill>
                    <img src={img} alt="" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <BsHeartFill className='icon'></BsHeartFill>
                    <img src={img} alt="" />
                    <h3>Annual Vince</h3>
                </div>
            </div>
        </div>
    );
};

export default listing;