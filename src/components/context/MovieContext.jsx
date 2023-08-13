import React, { createContext, useEffect, useState } from "react";
import { movies } from "../../movieDb";

export const MovieContext = createContext(); //create context

export function MovieProvider({ children }) {
  const [movielist, setmovielist] = useState(movies);

  useEffect(() => {
    movielist &&
      localStorage.setItem(
        "movielist",
        JSON.stringify({ movielist, isNotInitial: true })
      );
  }, [movielist]);

  useEffect(() => {
    const movielistExist = JSON.parse(localStorage.getItem("movielist"));
    if (movielistExist && movielistExist.isNotInitial) {
      setmovielist(movielistExist.movielist);
    }
  }, []);

  return (
    <MovieContext.Provider value={{ movielist, setmovielist }}>
      {children}
    </MovieContext.Provider>
  );
}
