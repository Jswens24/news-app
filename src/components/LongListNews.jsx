import React, { useContext } from 'react'
import { NewsContext } from '../App'
import LongListNewsCard from './LongListNewsCard'
import { MdKeyboardArrowDown } from 'react-icons/md'

const LongListNews = () => {
    const { newsGlobal } = useContext(NewsContext)

    return (
        <div>
            <div className='flex justify-around flex-wrap pt-5 mt-10 w-screen px-5'>
                <LongListNewsCard newsGlobal={newsGlobal[29]} />
                <LongListNewsCard newsGlobal={newsGlobal[30]} />
                <LongListNewsCard newsGlobal={newsGlobal[31]} />
                <LongListNewsCard newsGlobal={newsGlobal[32]} />
                <LongListNewsCard newsGlobal={newsGlobal[33]} />
                <LongListNewsCard newsGlobal={newsGlobal[34]} />
                <LongListNewsCard newsGlobal={newsGlobal[35]} />
                <LongListNewsCard newsGlobal={newsGlobal[36]} />
                <LongListNewsCard newsGlobal={newsGlobal[37]} />
                <LongListNewsCard newsGlobal={newsGlobal[28]} />
                <LongListNewsCard newsGlobal={newsGlobal[27]} />
                <LongListNewsCard newsGlobal={newsGlobal[26]} />
                <LongListNewsCard newsGlobal={newsGlobal[25]} />
                <LongListNewsCard newsGlobal={newsGlobal[24]} />
                <LongListNewsCard newsGlobal={newsGlobal[23]} />
                <LongListNewsCard newsGlobal={newsGlobal[22]} />
            </div>
            <div className='flex justify-center items-center flex-col py-7'>
                <button className='text-more-stories text-sm'>MORE STORIES</button>
                <MdKeyboardArrowDown className='text-light-gray-text h-5' />
            </div>
        </div>
    )
}

export default LongListNews