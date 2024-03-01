import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AnimeDetails() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => res.json())
      .then(resdata => {
        setAnimeData(resdata.data);
        console.log(resdata.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  useEffect(() => {
    console.log(animeData);
  }, [animeData]);
  

  if (!animeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-scree">
      <div className="max-w-4xl w-full mx-10 bg-white rounded-lg shadow-lg bg-opacity-20 overflow-hidden">
        <div className="flex">
          <div className="w-1/2 p-8">
            <img src={animeData.images.jpg.large_image_url} alt="Anime" className="w-full" />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold text-black mb-4">{animeData.title}</h1>
            <p className="text-gray-700">{animeData.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
