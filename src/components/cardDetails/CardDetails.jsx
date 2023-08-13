import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const CardDetails = () => {
  const { id } = useParams();
  const { movielist } = useContext(MovieContext);
  console.log("movielist", movielist);

  const movieDetailArr = movielist.find((obj) => obj.id === id);

  console.log("movieDetailArr", movieDetailArr);

  if (Object.keys(movieDetailArr).length) {
    const {
      id,
      title,
      year,
      genre,
      rating,
      director,
      writer,
      cast,
      summary,
      imageURL,
    } = movieDetailArr;

    return (
      <div key={id}>
        <img src={imageURL} alt="product" />
        <h1>{title}</h1>
        <h3>year : {year}</h3>
        <p>rating : {rating}</p>
        <i>director : {director}</i>
        <p>writer : {writer}</p>
        <p>cast : {cast}</p>
        <p>summary : {summary}</p>
      </div>
    );
  }

  return "Not Found";
};

export default CardDetails;
