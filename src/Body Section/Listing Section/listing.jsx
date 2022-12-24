import React from 'react';
import './listing.css';

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
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default listing;