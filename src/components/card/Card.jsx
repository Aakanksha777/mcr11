import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import "./Card.css";

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

  const [starred, setStarred] = useState(false);

  const handleYear = (e) => {
    console.log("handleYear");
    const targetvalue = e.target.value;
    const newFilterArray = handleFilter(targetvalue, movielist);
    setFilterArray(newFilterArray);
  };

  const handleGenre = (e) => {
    const targetvalue = e.target.value;
    const genreArr = movielist.filter((ele) => {
      if (ele.genre === targetvalue) {
        console.log("ele.genre", ele.genre);
        return genreArr;
      }
      return movielist;
    });
  };
  // const userAndFollowings = user?.following?.map((person) => person?.username);
  // userAndFollowings?.push(user.username); //push username
  // console.log("userAndFollowings", userAndFollowings);

  // const updateArray = allPosts?.filter((post) =>
  //   userAndFollowings?.some((username) => username === post?.username)
  // );
  // console.log("updateArray", updateArray);
  // setFilterArray(updateArray)

  return (
    <div>
      <select onChange={handleYear}>
        <option value="all">All</option>
        <option value="1994">1994</option>
        <option value="1992">1992</option>
        <option value="2010">2010</option>
      </select>

      <select onChange={handleGenre}>
        <option value="all">All</option>
        <option value="Biography">Biography</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
      </select>

      <div className="list-container">
        {filterArray.map(
          ({
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
          }) => (
            <div key={id} className="single-card">
              <div>
                {" "}
                <img src={imageURL} alt="movies" className="movie-image" />
              </div>
              <h3>{title}</h3>
              <p>{summary}</p>
              <div>
                <button onClick={() => setStarred(!starred)}>
                  {!starred ? "star" : "Starred"}
                </button>
                <button>Wtachlater</button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Card;
