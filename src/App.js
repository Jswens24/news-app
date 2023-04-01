import { createContext, useContext, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainNews from './components/MainNews';
import WatchLatest from './components/WatchLatest';
import MoreNews from './components/MoreNews';
import DiscussLatest from './components/DiscussLatest';
import LongListNews from './components/LongListNews';

const NewsContext = createContext()

function App() {
  const [newsGlobal, setNewsGlobal] = useState('');

  // console.log(newsGlobal);

  return (
    <div className="App">
      <NewsContext.Provider value={{ newsGlobal, setNewsGlobal }}>
        <NavBar />
        <MainNews />
        <WatchLatest />
        <MoreNews />
        <DiscussLatest />
        <LongListNews />
      </NewsContext.Provider>
    </div>
  );
}

export default App;

export { NewsContext }