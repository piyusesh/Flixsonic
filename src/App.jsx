import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Anime from './components/Anime';
import Movies from './components/Movies';
import Music from './components/Music';
import Games from './components/Games';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Anime' element={<Anime/>} />
        <Route path='/Movies' element={<Movies/>} />
        <Route path='/Music' element={<Music/>} />
        <Route path='/Games' element={<Games/>} />
      </Routes>
    </Router>
  )
}

export default App
