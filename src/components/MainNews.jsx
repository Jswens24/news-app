import React, { useEffect, useContext } from 'react';
import { NewsContext } from '../App';
import axios from 'axios';
import redTriangle from '../red-triangle.png';
import FeaturedNews from './FeaturedNews';
import { NavLink } from 'react-router-dom';



const { REACT_APP_API_KEY } = process.env;



const MainNews = () => {
    const { newsGlobal, setNewsGlobal } = useContext(NewsContext)

    const getArticles = async () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${REACT_APP_API_KEY}`)
            .then(res => {
                setNewsGlobal(res.data.articles);
                // console.log(res.data.articles);

            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getArticles()
    }, []);

    // console.log(newsGlobal[0]);

    return (
        <div className='pt-10 px-20 flex justify-between'>
            <div className='w-3/5 pr-10 text-left'>
                <div className='flex'>
                    <img className='h-3 inline' src={redTriangle} />
                    <p><span className='text-dark-red'>READ</span> TOP STORY</p>
                </div>
                <NavLink to={`/detailNews/0`}>
                    <img className='pt-2.5' alt='news-related' src={newsGlobal[0]?.urlToImage} />
                    <p className='text-2xl font-medium'>{newsGlobal[0]?.title}</p>
                    <p className='text-sm font-light text-gray-500'>By {newsGlobal[0]?.author}</p>
                </NavLink>
            </div>
            <div className='w-2/5'>
                <div className='flex '>
                    <img className='h-3 inline' src={redTriangle} />
                    <p><span className='text-dark-red'>READ</span> FEATURED</p>
                </div>
                <div className='flex flex-col justify-between '>
                    <NavLink to={`/detailNews/1`}>
                        <FeaturedNews news={newsGlobal[1]} />
                    </NavLink>
                    <NavLink to={`/detailNews/2`}>
                        <FeaturedNews news={newsGlobal[2]} />
                    </NavLink>
                    <NavLink to={`/detailNews/3`}>
                        <FeaturedNews news={newsGlobal[3]} />
                    </NavLink>
                    <NavLink to={`/detailNews/4`}>
                        <FeaturedNews news={newsGlobal[4]} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainNews