import React from 'react'

const LongListNewsCard = ({ newsGlobal }) => {
    return (
        <div className='px-2 pb-5 w-64'>
            <img className='h-40 w-72 max-w-none' alt='news' src={newsGlobal?.urlToImage} />
            <div className='text-left'>
                <p className='text-base font-medium pt-2'>{newsGlobal?.title}</p>
                <p className='text-sm font-light text-gray-500'>By {newsGlobal?.author}</p>
            </div>
        </div>
    )
}

export default LongListNewsCard