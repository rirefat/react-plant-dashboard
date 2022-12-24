import React from 'react';
import './Body.css';
import Top from './Top Section/top';
import Listing from './Listing Section/listing';
import Activity from './Activity Section/activity';

const Body = () => {
    return (
        <div className='mainContent'>
            <Top></Top>
            <div className="bottom flex">
                <Listing></Listing>
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Body;