import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const CardDetails = () => {
  const { id } = useParams();
  const paramsid = Number(id);
  const { movielist } = useContext(MovieContext);
  const newMovielist = [...movielist];
  console.log("movielist", movielist);

  const movieDetailArr = newMovielist.find((obj) => obj.id === paramsid);

  console.log("movieDetailArr", movieDetailArr);

  return (
    <div>
      <img src={movieDetailArr.imageURL} alt="movie" style={{ width: "50%" }} />
      <h1>{movieDetailArr.title}</h1>
      <h3>year : {movieDetailArr.year}</h3>
      <p>rating : {movieDetailArr.rating}</p>
      <i>director : {movieDetailArr.director}</i>
      <p>writer : {movieDetailArr.writer}</p>
      <p>cast : {movieDetailArr.cast}</p>
      <p>summary : {movieDetailArr.summary}</p>
    </div>
  );
};

export default CardDetails;
