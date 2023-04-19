import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGlobalContext } from './contexts/Store';
import Homepage from "./components/Homepage"
import About from './components/About';
import Header from './components/Header';
import Footer from "./components/Footer";
import Coin from './components/Coin/Coin';
import Newsletter from './components/News/Newsletter';

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

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

      <Footer />
    </>
  );
}

export default App;
