import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AnimeDetails() {
  const { mail_id } = useParams();
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${mail_id}`)
      .then(res => res.json())
      .then(resdata => {
        setAnimeData(resdata)
        setAnimeData(resdata.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [mail_id]);

  useEffect(() => {
    console.log(animeData);
  }, [animeData]);
  

  if (!animeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='flex'>
        <div className='w-1/2 p-10'>
          <img src={animeData.images.jpg.large_image_url} alt="Image" className='h-full' />
        </div>
        <div className='w-1/2 p-10'>
          <h1 className='text-4xl my-4 text-blue-500'>{animeData.title}</h1>
          <p>{animeData.synopsis}</p>
        </div>
      </div>
    </>
  );
}  

export default AnimeDetails;
