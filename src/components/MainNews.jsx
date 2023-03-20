import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeaturedNews from './FeaturedNews';


const { REACT_APP_API_KEY } = process.env;



const MainNews = () => {
    const [news, setNews] = useState({});

    const getArticles = () => {
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
                <p>READ TOP STORY</p>
                {/* <img src={news[0].urlToImage} />
                <p>{news[0].title}</p>
                <p>By {news[0].author}</p> */}
            </div>
            <div>
                <p>READ FEATURED</p>
                {/* <FeaturedNews news={news[1]} />
                <FeaturedNews news={news[2]} />
                <FeaturedNews news={news[3]} />
                <FeaturedNews news={news[4]} />
                <FeaturedNews news={news[5]} /> */}
            </div>
        </div>
    )
}

export default MainNews