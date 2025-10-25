// import { createContext, useContext, useState } from "react";

// const FavoritesContext = createContext();

// export const useFavorites = () => useContext(FavoritesContext);

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const toggleFavorite = (marathon) => {
//     const exists = favorites.find((m) => m._id === marathon._id);
//     if (exists) {
//       setFavorites(favorites.filter((m) => m._id !== marathon._id));
//     } else {
//       setFavorites([...favorites, marathon]);
//     }
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    // LocalStorage theke load kora
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Favorites update hole LocalStorage update
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f._id === item._id);
      if (exists) return prev.filter((f) => f._id !== item._id);
      return [...prev, item];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
