import React from 'react';
import { BsDot } from 'react-icons/bs'

const LatestVideoCard = ({ newsGlobal }) => {
    // console.log(newsGlobal);

    return (
        <div className='p-5 w-96'>
            <img className='rounded-md h-44 w-80 max-w-none' alt='video news' src={newsGlobal?.urlToImage} />
            <p className='text-md font-md text-light-gray-text'>{newsGlobal?.title}</p>
            <p className=' flex text-sm font-light text-light-gray-text'>{newsGlobal?.author}
                <BsDot />
                {newsGlobal?.publishedAt}
            </p>
        </div>
    )
}

export default LatestVideoCard