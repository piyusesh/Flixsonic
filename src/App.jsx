import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import Anime from './components/Anime';
import AnimeDetails from './components/Anime/AnimeDetails';
import Games from './components/Games';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/anime' element={<Anime />} />
        <Route path="/anime/:mail_id" element={<AnimeDetails />} />
        <Route path='/games' element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
