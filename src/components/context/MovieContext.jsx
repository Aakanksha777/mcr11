import React, { createContext, useEffect, useState } from "react";
import { movies } from "../../movieDb";

export const MovieContext = createContext(); //create context

const newKeys = movies.map((obj) => {
  obj.isStar = false;
  obj.isWatchlist = false;
  return obj;
});
const checkPersistentDataEqualsInital = (initial) => {
  const moviesExist = JSON.parse(localStorage.getItem("movies"));
  if (!moviesExist) return initial
  if (initial.length !== moviesExist.length) return moviesExist
  let flag = true
  moviesExist.forEach((per) => {
    if (!initial.some((ini) => {
      if (ini.id === per.id) {
        return ini.isStar === per.isStar || ini.isWatchlist === per.isWatchlist
      }
    })) {
      flag = false
    }
  })
  return flag ? initial : moviesExist
}
export function MovieProvider({ children }) {
  const [movielist, setmovielist] = useState(checkPersistentDataEqualsInital(newKeys));

  useEffect(() => {
    if (movielist !== newKeys) {
      localStorage.setItem(
        "movies",
        JSON.stringify(movielist)
      );
    }
  }, [movielist]);

  return (
    <MovieContext.Provider value={{ movielist, setmovielist }}>
      {children}
    </MovieContext.Provider>
  );
}