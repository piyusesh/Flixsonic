import React from "react";
import { Link } from "react-router-dom";

function AnimeList({ animelist }) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-10 px-20">
      {animelist ? (
        animelist.map((anime, index) => (
          <Link key={index} to={`/anime/${anime.mal_id}`} className="flex flex-col bg-blue-500 rounded overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <img
              src={anime.images.jpg.large_image_url}
              alt="animeImage"
              className="h-32 md:h-40 w-full object-cover"
            />
            <div className="px-2 py-2">
              <h4 className="font-semibold text-sm md:text-base mb-1 truncate text-white">
                {anime.title}
              </h4>
              <p>{anime.release_date}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className="not-found">Not Found</div>
      )}
    </div>
  );
}

export default AnimeList
