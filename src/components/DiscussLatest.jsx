import React, { useContext } from 'react'
import { NewsContext } from '../App'
import redTriangle from '../red-triangle.png';
import { BsArrowRight } from 'react-icons/bs'
import DiscussLatestCard from './DiscussLatestCard';

const DiscussLatest = () => {
    const { newsGlobal } = useContext(NewsContext);
    console.log(newsGlobal);

    return (
        <div className='bg-dark-gray-div mt-10 text-white pt-16 px-20'>
            <div className='flex  font-light'>
                <img className='h-3 inline' src={redTriangle} />
                <p><span className='text-dark-red'>DISCUSS</span> LATEST</p>
            </div>
            <div className='flex overflow-x-scroll '>
                <DiscussLatestCard newsGlobal={newsGlobal[17]} />
                <DiscussLatestCard newsGlobal={newsGlobal[18]} />
                <DiscussLatestCard newsGlobal={newsGlobal[19]} />
                <DiscussLatestCard newsGlobal={newsGlobal[20]} />
                <DiscussLatestCard newsGlobal={newsGlobal[21]} />
                <DiscussLatestCard newsGlobal={newsGlobal[22]} />
                <DiscussLatestCard newsGlobal={newsGlobal[23]} />
                <DiscussLatestCard newsGlobal={newsGlobal[24]} />
                <DiscussLatestCard newsGlobal={newsGlobal[25]} />
                <DiscussLatestCard newsGlobal={newsGlobal[26]} />
                <DiscussLatestCard newsGlobal={newsGlobal[27]} />
                <DiscussLatestCard newsGlobal={newsGlobal[28]} />

            </div>
            <div className='flex justify-center items-center pb-7'>
                <button className='px-2 text-md font-md text-light-gray-text'>VIEW ALL</button>
                <BsArrowRight className='text-light-gray-text' />
            </div>
        </div>
    )
}

export default DiscussLatest