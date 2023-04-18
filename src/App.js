import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Coin from './components/Coin/Coin';
import Header from './components/Header';
import { useGlobalContext } from './contexts/Store';
import { Route, Routes } from 'react-router-dom';
import Newsletter from './components/News/Newsletter';
import Homepage from "./components/Homepage"

const App = () => {
  const [searchWord, setSearchWord] = useState("Bitcoin");
  const { coins } = useGlobalContext();

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  const setSearchValueHandler = (x) => {
    setSearchWord(x);
  }

  return (

    <>
      <Header setSearchValueHandler={setSearchValueHandler} />

      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/coins" element={<Coin filteredCoins={filteredCoins} />} />
        <Route element={<About />} />
        <Route path="/news" element={<Newsletter />} />
      </Routes>
    </>
  );
}

export default App;
