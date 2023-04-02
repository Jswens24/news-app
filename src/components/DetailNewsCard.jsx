import React, { useContext } from 'react'
import { NewsContext } from '../App'
import theNews from '../the-news.png'

const DetailNewsCard = ({ id }) => {

    const { newsGlobal } = useContext(NewsContext)

    // console.log(newsGlobal[0]);

    return (
        <div>
            <div className='border-b border-gray-300'>
                <img className='h-20' alt='news' src={theNews} />
            </div>
            <div>
                <h1>{newsGlobal[id]?.title}</h1>
                <p>By {newsGlobal[id]?.author}</p>
                <img alt='news' src={newsGlobal[id]?.urlToImage} />
            </div>
        </div>
    )
}

export default DetailNewsCard