import React, { useEffect, useState } from 'react';
import axios from 'axios';
import redTriangle from '../red-triangle.png'
import FeaturedNews from './FeaturedNews';



const { REACT_APP_API_KEY } = process.env;



const MainNews = () => {
    const [news, setNews] = useState([]);

    const getArticles = async () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_API_KEY}`)
            .then(res => {
                setNews(res.data.articles);
                // console.log(res.data.articles);

            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getArticles()
    }, []);

    // console.log(news);

    return (
        <div className='pt-10 px-20 flex justify-between'>
            <div className='w-3/5 pr-10 text-left'>
                <div className='flex'>
                    <img className='h-3 inline' src={redTriangle} />
                    <p><span className='text-dark-red'>READ</span> TOP STORY</p>
                </div>
                <img className='pt-2.5' alt='news-related' src={news[0]?.urlToImage} />
                <p className='text-2xl font-medium'>{news[0]?.title}</p>
                <p className='text-sm font-light text-gray-500'>By {news[0]?.author}</p>
            </div>
            <div className='w-2/5'>
                <div className='flex '>
                    <img className='h-3 inline' src={redTriangle} />
                    <p><span className='text-dark-red'>READ</span> FEATURED</p>
                </div>
                <div className='flex flex-col justify-between '>
                    <FeaturedNews news={news[1]} />
                    <FeaturedNews news={news[2]} />
                    <FeaturedNews news={news[3]} />
                    <FeaturedNews news={news[4]} />
                </div>
            </div>
        </div>
    )
}

export default MainNews