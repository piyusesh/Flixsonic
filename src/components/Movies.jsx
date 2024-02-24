import React, { useState } from 'react'

function Movies() {
    const [search, setSeach] = useState('');
    const [data, setData] = useState({});
    const apiUrl = `http://www.omdbapi.com/?t=${search}&apikey=41772304`;

    const handleSearch = () => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    const handleSearchChange = (e) => {
        setSeach(event.target.value)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-3 py-10">
            <div className='flex gap-3'>
                <input value={search} onChange={handleSearchChange} type="text" placeholder="Search..." className="px-4 py-2 text-sm rounded-lg border border-gray-300" />
                <button onClick={() => search.trim() !== '' && handleSearch()} className='bg-blue-500 text-sm text-white px-4 py-2 rounded-lg'>
                    Search
                </button>
            </div>
            
    
            {Object.keys(data).length > 0 && (
                <div className='flex flex-col items-center text-sm'>
                    <div>
                        <img src={data.Poster} alt="Movie poster" className='w-56 h-auto' />
                    </div>
                    <div>Name: {data.Title}</div>
                    <div>Released: {data.Released}</div>
                    <div>Genre: {data.Genre}</div>
                    <div>Year: {data.Year}</div>
                    <div>Writer: {data.Writer}</div>
                    <div>Imdb Rating: {data.imdbRating}</div>
                    <div>Awards: {data.Awards}</div>
                    <div>Runtime: {data.Runtime}</div>
                </div>
            )}
        </div>
    );
}

export default Movies