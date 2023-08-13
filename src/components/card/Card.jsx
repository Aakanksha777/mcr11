import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import "./Card.css";
import Cardlist from "../cardlist/Cardlist";
import { Link } from "react-router-dom";

// global func
const handleFilter = (value, movielist) => {
  const valueYear = Number(value);
  if (value === "all") {
    return movielist;
  }
  const newFilterArray = movielist.filter((item) => item.year === valueYear);
  return newFilterArray;
};

const Card = () => {
  const { movielist, setmovielist } = useContext(MovieContext);
  const [filterArray, setFilterArray] = useState(movielist);
  const [query, setQuery] = useState("");

  const handleYear = (e) => {
    const targetvalue = e.target.value;
    const newFilterArray = handleFilter(targetvalue, movielist);
    setFilterArray(newFilterArray);
  };

  const handleGenre = (e) => {
    const targetvalue = e.target.value;
    const genreArr = movielist.filter((ele) => {
      if (ele.genre.some((gnre) => gnre === targetvalue)) {
        return ele;
      }
    });
    setFilterArray(genreArr);
    console.log("genreArr", genreArr);
  };

  const handleRating = (e) => {
    const targetvalue = Number(e.target.value);
    if (targetvalue === "all") {
      return movielist;
    }
    const newFilterArray = movielist.filter(
      (item) => item.rating === targetvalue
    );
    return newFilterArray;
  };

  const handleInputValue = (e) => {
    setQuery(e.target.value);
    const newArray = movielist.filter(
      (ele) =>
        ele.title.toLowerCase().includes(query) ||
        ele.director.toLowerCase().includes(query) ||
        ele.cast.some((cst) => cst.toLowerCase().includes(query))
    );
    setFilterArray(newArray);
  };

  return (
    <div>
      <input
        placeholder="search by title, cast, director"
        onChange={handleInputValue}
        value={query}
      />

      <b>Year</b>
      <select onChange={handleYear}>
        <option value="all">All</option>
        <option value="1994">1994</option>
        <option value="1992">1992</option>
        <option value="2010">2010</option>
      </select>

      <b>Genre</b>
      <select onChange={handleGenre}>
        <option value="all">All</option>
        <option value="Biography">Biography</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
      </select>

      <b>Rating</b>
      <select onChange={handleRating}>
        <option value="all">All</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
      </select>

      <Link to="/modal">Add Movies</Link>

      <Cardlist db={filterArray} />
    </div>
  );
};

export default Card;
