import React, { useContext } from 'react';
import { NewsContext } from '../App';
import redTriangle from '../red-triangle.png';
import LatestVideoCard from './LatestVideoCard';

const WatchLatest = () => {
    const { newsGlobal } = useContext(NewsContext);

    return (
        <div className='bg-dark-gray-div mt-10 text-white pt-16 px-20'>
            <div className='flex  font-light'>
                <img className='h-3 inline' src={redTriangle} />
                <p><span className='text-dark-red'>WATCH</span> LATEST</p>
            </div>
            <div className='flex overflow-x-scroll '>
                <LatestVideoCard newsGlobal={newsGlobal[5]} />
                <LatestVideoCard newsGlobal={newsGlobal[6]} />
                <LatestVideoCard newsGlobal={newsGlobal[7]} />
                <LatestVideoCard newsGlobal={newsGlobal[8]} />
                <LatestVideoCard newsGlobal={newsGlobal[9]} />
                <LatestVideoCard newsGlobal={newsGlobal[10]} />
                <LatestVideoCard newsGlobal={newsGlobal[11]} />
                <LatestVideoCard newsGlobal={newsGlobal[12]} />
            </div>

        </div>
    )
}

export default WatchLatest;