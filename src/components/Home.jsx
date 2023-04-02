import React from 'react';
import MainNews from './MainNews';
import WatchLatest from './WatchLatest';
import MoreNews from './MoreNews';
import DiscussLatest from './DiscussLatest';
import LongListNews from './LongListNews';
import NavBar from './NavBar';
import Footer from './Footer';


const Home = () => {

    return (
        <div>
            <NavBar />
            <MainNews />
            <WatchLatest />
            <MoreNews />
            <DiscussLatest />
            <LongListNews />
            <Footer />
        </div>
    )
}

export default Home