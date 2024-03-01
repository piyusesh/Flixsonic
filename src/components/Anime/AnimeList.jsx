import React, { useState } from "react";
import { Link } from "react-router-dom";

function AnimeList({ animelist }) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = animelist.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(animelist.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 xl:px-20">
      {currentItems.map((anime, index) => (
        <Link
        key={index}
        to={`/anime/${anime.mal_id}`}
        className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 bg-opacity-20 bg-black text-white"
      >
        <div className="flex">

          <div className="w-1/2">
            <img
              src={anime.images.jpg.large_image_url}
              alt="animeImage"
              className="h-64 object-cover rounded-tl-lg rounded-bl-lg"
            />
          </div>
      
          <div className="w-1/2 bg-gradient-to-t from-black to-transparent p-4 rounded-tr-lg rounded-br-lg">
            <div className="flex flex-col justify-end h-full">
              <h4 className="text-lg font-semibold mb-2 truncate">{anime.title}</h4>
              <p className="text-sm text-gray-300">Year: {anime.year}</p>
              <p className="text-sm text-gray-300">Episodes : {anime.episodes}</p>
              <p className="text-sm text-gray-300">Score : {anime.score}</p>
              <p className="text-sm text-gray-300">Popularity : {anime.popularity}</p>
            </div>
          </div>
        </div>
      </Link>      
      ))}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4"> {/* Adjusted justify-center */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-2 px-4 py-2 bg-black text-white rounded-md focus:outline-none ${
                currentPage === i + 1 ? "bg-opacity-50" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default AnimeList;
