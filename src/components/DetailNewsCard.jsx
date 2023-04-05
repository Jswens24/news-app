import React, { useContext } from 'react'
import { NewsContext } from '../App'
import theNews from '../the-news.png'
import { BsDot } from 'react-icons/bs'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

const DetailNewsCard = ({ id }) => {

    const { newsGlobal } = useContext(NewsContext)

    // console.log(newsGlobal[0]);

    return (
        <div>
            <div className='border-b border-gray-300'>
                <img className='h-20' alt='news' src={theNews} />
            </div>
            <div>
                <p>- NEWS -</p>
                <h1>{newsGlobal[id]?.title}</h1>
                <div>
                    <p>By {newsGlobal[id]?.author} </p>
                    <BsDot />
                    <p>{newsGlobal[id]?.publishedAt}</p>
                    <p>JessicaNews.com</p>
                    <BsDot />
                    <div className='bg-facebook-blue rounded-full p-3 w-10 h-10 flex justify-center items-center mx-2 text-white'>
                        <FaFacebookF />
                    </div>
                    <div className='bg-twitter-blue rounded-full p-3 w-10 h-10 flex justify-center items-center mx-2 text-white'>
                        <FaTwitter />
                    </div>
                </div>
                <img alt='news' src={newsGlobal[id]?.urlToImage} />
            </div>
        </div >
    )
}

export default DetailNewsCard