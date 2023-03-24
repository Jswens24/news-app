import React from 'react'

const FeaturedNews = (props) => {

    // console.log(props.news);


    return (
        <div className='flex text-left pt-2'>
            <img className='h-32 p-4' alt='news story' src={props.news?.urlToImage} />
            <div className='flex flex-col'>
                <p className='text-lg font-medium'>{props.news?.title}</p>
                <p className='text-sm font-light text-gray-500'>By {props.news?.author}</p>
            </div>
        </div>
    )
}

export default FeaturedNews