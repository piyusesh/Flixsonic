import React from "react";

function AnimeList({ animelist }) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-4 px-10">
      {animelist ? (
        animelist.map((anime, index) => (
          <div key={index} className="flex flex-col rounded overflow-hidden">
            <img
              src={anime.images.jpg.large_image_url}
              alt="animeImage"
              className="h-32 md:h-40 w-full object-cover"
            />
            <div className="px-2 py-2">
              <h4 className="font-semibold text-sm md:text-base mb-1 truncate">{anime.title}</h4>
            </div>
          </div>
        ))
      ) : (
        <div className="not-found">Not Found</div>
      )}
    </div>
  );
}

export default AnimeList;
