import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (marathon) => {
    const exists = favorites.find((m) => m._id === marathon._id);
    if (exists) {
      setFavorites(favorites.filter((m) => m._id !== marathon._id));
    } else {
      setFavorites([...favorites, marathon]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
