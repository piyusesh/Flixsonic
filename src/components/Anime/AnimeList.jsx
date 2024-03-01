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
          <img
            src={anime.images.jpg.large_image_url}
            alt="animeImage"
            className="h-64 object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
            <div>
              <h4 className="text-lg font-semibold mb-2 truncate">{anime.title}</h4>
              <p className="text-sm text-gray-300">{anime.release_date}</p>
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
