import React from 'react';
import newsLogo from '../JESSICA-NEWS10.png'
import { MdSearch } from 'react-icons/md'

const NavBar = () => {
    return (
        <header>
            <div className='flex p-1 bg-black justify-center items-center'>
                <p className='text-white pr-2 font-light'>Build the future you want to see.</p>
                <a className='text-red-600 underline font-bold' target='_blank' href='https://www.lego.com/en-us'>Learn More.</a></div>
            <div className='bg-dark-gray text-white flex h-16 justify-around items-center relative'>
                <img src={newsLogo} />
                <nav className='flex justify-around w-80'>
                    <a className='font-light' href=''>Listen</a>
                    <a className='font-light' href=''>Read</a>
                    <a className='font-light' href=''>Watch</a>
                    <a className='font-light' href=''>Discuss</a>
                    <a className='font-light' href=''>Shop</a>
                </nav>
                <div className='flex font-light w-80 justify-center items-center'>
                    <MdSearch />
                    <p className='pr-5 pl-5'>Log In</p>
                    <button className='bg-dark-red rounded-md p-1 px-5'>Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default NavBar