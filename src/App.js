import { createContext, useContext, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DetailNews from './components/DetailNews';
import Home from './components/Home';

const NewsContext = createContext();

function App() {
  const [newsGlobal, setNewsGlobal] = useState('');

  // console.log(newsGlobal);

  return (
    <div className="App">
      <NewsContext.Provider value={{ newsGlobal, setNewsGlobal }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detailNews/:id' element={<DetailNews />} />
        </Routes>
      </NewsContext.Provider>
    </div>
  );
}

export default App;

export { NewsContext }