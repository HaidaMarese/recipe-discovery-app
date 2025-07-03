import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav !== id));
  };

  const isFavorite = (id) => favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
