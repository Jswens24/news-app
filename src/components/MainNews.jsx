import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GrTopCorner } from 'react-icons/gr'



const { REACT_APP_API_KEY } = process.env;



const MainNews = () => {
    const [news, setNews] = useState([]);

    const getArticles = async () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_API_KEY}`)
            .then(res => {
                setNews(res.data.articles);
                console.log(res.data.articles);

            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getArticles()
    }, []);

    console.log(news);

    return (
        <div>
            <div>
                <div class="w-11  overflow-hidden">
                    <div class=" h-16  bg-dark-red rotate-45 transform origin-top-right"></div>
                </div>
                <p><span className='text-dark-red'>READ</span> TOP STORY</p>
                <img alt='news-related' src={news[0]?.urlToImage} />
                <p>{news[0]?.title}</p>
                <p>By {news[0]?.author}</p>
            </div>
            <div>
                <p>READ FEATURED</p>
            </div>
        </div>
    )
}

export default MainNews