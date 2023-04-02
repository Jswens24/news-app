import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRss } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-dark-gray-div text-white flex flex-col justify-center items-center py-7'>
            <div className='flex justify-between w-full px-10 text-left '>
                <div>
                    <p className='cursor-pointer pb-5 font-light'>About</p>
                    <p className='cursor-pointer pb-5 font-light'>Authors</p>
                    <p className='cursor-pointer pb-5 font-light'>Advertise With Us</p>
                    <p className='cursor-pointer pb-5 font-light'>Book our Speakers</p>
                    <p className='cursor-pointer pb-5 font-light'>Do Not Sell or Share My Personal Information </p>
                    <p className='cursor-pointer pb-5 font-light'>Legal</p>
                </div>
                <div>
                    <p className='cursor-pointer pb-5 font-light'>Support</p>
                    <p className='cursor-pointer pb-5 font-light'>Standards & Policies</p>
                    <p className='cursor-pointer pb-5 font-light'>Shipping & Returns</p>
                    <p className='cursor-pointer pb-5 font-light'>Careers</p>
                    <p className='cursor-pointer pb-5 font-light'>Media & Press Inquiries</p>
                </div>
                <div className='flex'>
                    <div className='border-white border-solid border rounded-full p-3 w-10 h-10 flex justify-center items-center border-opacity-25 mx-2'>
                        <FaFacebookF />
                    </div>
                    <div className='border-white border-solid border rounded-full p-3 w-10 h-10 flex justify-center items-center border-opacity-25 mx-2'>
                        <FaTwitter />
                    </div>
                    <div className='border-white border-solid border rounded-full p-3 w-10 h-10 flex justify-center items-center border-opacity-25 mx-2'>
                        <FaInstagram />
                    </div>
                    <div className='border-white border-solid border rounded-full p-3 w-10 h-10 flex justify-center items-center border-opacity-25 mx-2'>
                        <FaYoutube />
                    </div>
                    <div className='border-white border-solid border rounded-full p-3 w-10 h-10 flex justify-center items-center border-opacity-25 mx-2'>
                        <FaRss />
                    </div>
                </div>
            </div>
            <div className='border-white border-solid border-t w-full border-opacity-25 pt-5 flex justify-center items-center'>
                <p className='text-xs font-light'>© Copyright 2023, Jessica News LLC | Terms | Privacy</p>
            </div>
        </div>
    )
}

export default Footer