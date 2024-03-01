import { useState } from 'react';
import './App.css';
import '@fontsource/dancing-script';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Anime from './components/Anime';
import AnimeDetails from './components/Anime/AnimeDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anime' element={<Anime />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
