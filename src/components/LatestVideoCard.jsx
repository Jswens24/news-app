import React from 'react';
import { BsDot } from 'react-icons/bs'

const LatestVideoCard = ({ newsGlobal }) => {
    // console.log(newsGlobal);

    return (
        <div className='p-5 w-96'>
            <img className='rounded-md h-44 w-80 max-w-none' alt='video news' src={newsGlobal?.urlToImage} />
            <div className='flex flex-col justify-center items-center'>
                <p className='text-md font-md text-light-gray-text'>{newsGlobal?.title}</p>
                <p className=' flex text-sm font-light text-light-gray-text items-center'>{newsGlobal?.author}
                    <BsDot />
                    {newsGlobal?.publishedAt}
                </p>
            </div>
        </div >
    )
}

export default LatestVideoCard