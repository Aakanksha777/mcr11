import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";

const Cardlist = ({ db }) => {
  const { movielist, setmovielist } = useContext(MovieContext);

  const handleStarred = (id) => {
    const updateStarredField = movielist.map((list) => {
      if (list.id === id) {
        list.isStar = !list.isStar;
      }
      return list;
    });
    setmovielist(updateStarredField);
  };

  return (
    <div className="list-container">
      {db.length > 0 ? (
        db.map((ele) => {
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
            isStar,
            isWatchlist,
          } = ele;

          return (
            <div key={id} className="single-card">
              <div>
                {" "}
                <img src={imageURL} alt="movies" className="movie-image" />
              </div>
              <h3>{title}</h3>
              <p>{summary}</p>
              <p>Cast : {cast}</p>
              <p>Director : {director}</p>
              <div>
                <button onClick={() => handleStarred(ele.id)}>
                  {isStar ? "starred" : "star"}
                </button>

                <Link to={`/${id}`}>View more</Link>
              </div>
            </div>
          );
        })
      ) : (
        <b>NO movielist</b>
      )}
    </div>
  );
};

export default Cardlist;
