import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useFavorites } from "../../Context/FavoriteContext";
import { Helmet } from "react-helmet-async";

const Favorites = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 py-12">
          No favorites added yet.
        </h2>
      </div>
    );
  }

  return (
   <div className="pt-20 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
    <Helmet>
        <title>Favorite List | MarathonPro</title>
      </Helmet>
     <div className="w-11/12 mx-auto py-8">
      
      <h1 className="text-4xl text-center md:text-5xl font-bold text-gray-900 dark:text-gray-400 mb-12">
        Your Favorite Marathons
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((event) => (
          <div
            key={event._id}
            className="card rounded-xl bg-white dark:bg-gray-800 shadow-md p-4"
          >
            <figure className="overflow-hidden rounded-t-xl">
              <img
                src={
                  event.image ||
                  `https://placehold.co/600x400/0E7490/FFFFFF?text=${event.title}`
                }
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-300">
                {event.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {event.location}
              </p>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => toggleFavorite(event)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded cursor-pointer"
                >
                    Remove
                </button>

                <button
                  onClick={() => navigate(`/marathonDetails/${event._id}`)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer"
                >
                  See Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Favorites;
