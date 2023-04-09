import React, { useContext } from 'react'
import { NewsContext } from '../App'
import theNews from '../the-news.png'
import { BsDot } from 'react-icons/bs'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'

const DetailNewsCard = ({ id }) => {

    const { newsGlobal } = useContext(NewsContext)

    console.log(newsGlobal[0]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='border-b border-gray-300 w-full flex justify-center'>
                <img className='h-20' alt='news' src={theNews} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-dark-red text-sm font-medium pt-10 pb-5'>- NEWS -</p>
                <h1 className='text-5xl font-semibold pb-5'>{newsGlobal[id]?.title}</h1>
                <div className='flex text-sm justify-center items-center pb-7'>
                    <p className='text-dark-red font-medium px-2'>By {newsGlobal[id]?.author} </p>
                    <BsDot className='text-light-gray-text' />
                    <p>{newsGlobal[id]?.publishedAt}</p>
                    <p className='px-2'>JessicaNews.com</p>
                    <BsDot className='text-light-gray-text' />
                    <div className='bg-facebook-blue rounded-full p-3 w-10 h-10 flex justify-center items-center mx-2 text-white'>
                        <FaFacebookF />
                    </div>
                    <div className='bg-twitter-blue rounded-full p-3 w-10 h-10 flex justify-center items-center mx-2 text-white'>
                        <FaTwitter />
                    </div>
                    <div className='bg-light-gray-text rounded-full p-3 w-10 h-10 flex justify-center items-center mx-2 text-white'>
                        <RiSendPlaneFill />
                    </div>
                </div>
                <img className='w-4/5 pb-20' alt='news' src={newsGlobal[id]?.urlToImage} />
                <p className='px-6 text-lg pb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div >
    )
}

export default DetailNewsCard