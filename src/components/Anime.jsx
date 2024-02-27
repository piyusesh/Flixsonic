import React, { useEffect, useState } from 'react';
import AnimeList from './Anime/AnimeList';

function Anime() {

  const [search, setSearch] = useState('');
  const [animeData, setAnimeData] = useState([]);
  
  const getData = () => {
    fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      .then(res => res.json())
      .then(resdata => {
          setAnimeData(resdata.data);
      });
  }

  const handleSearch = () => {
    getData();
  }

  return (
    <>
      <div className='flex items-center justify-center gap-3 py-10'>
        <input value={search} onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Search..." className="px-4 py-2 text-sm rounded-lg border text-black border-gray-300"/>
        <button onClick={handleSearch} className='bg-blue-500 text-sm text-white px-4 py-2 rounded-lg'>
          Search
        </button>
      </div>

      <div>
        <AnimeList animelist={animeData}/>
      </div>
    </>
  );
}

export default Anime;
