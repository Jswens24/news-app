import React from 'react';


const MoreNewsCard = ({ newsGlobal }) => {

    return (
        <div className='p-5'>
            <img className='h-44 w-80 max-w-none' alt='news' src={newsGlobal?.urlToImage} />
            <div className='text-left'>
                <p className='text-lg font-medium pt-2'>{newsGlobal?.title}</p>
                <p className='text-sm font-light text-gray-500'>By {newsGlobal?.author}</p>
            </div>
        </div>
    )
};

export default MoreNewsCard;