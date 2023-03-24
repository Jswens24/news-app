import React from 'react';
import { BsDot } from 'react-icons/bs'

const LatestVideoCard = ({ newsGlobal }) => {
    // console.log(newsGlobal);

    return (
        <div>
            <img alt='video news' src={newsGlobal?.urlToImage} />
            <p>{newsGlobal?.title}</p>
            <p>{newsGlobal?.author}
                <BsDot />
                {newsGlobal?.publishedAt}
            </p>
        </div>
    )
}

export default LatestVideoCard