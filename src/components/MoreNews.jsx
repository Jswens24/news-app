import React, { useContext } from 'react';
import { NewsContext } from '../App';
import MoreNewsCard from './MoreNewsCard';

const MoreNews = () => {
    const { newsGlobal } = useContext(NewsContext)

    return (
        <div className='flex pt-5 mt-10 px-9 w-screen justify-around'>
            <MoreNewsCard newsGlobal={newsGlobal[13]} />
            <MoreNewsCard newsGlobal={newsGlobal[14]} />
            <MoreNewsCard newsGlobal={newsGlobal[15]} />
            <MoreNewsCard newsGlobal={newsGlobal[16]} />
        </div>
    )
};

export default MoreNews;