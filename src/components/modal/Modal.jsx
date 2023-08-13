import React, { useContext, useState } from "react";
import "./Modal.css";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const { movielist, setmovielist } = useContext(MovieContext);

  const [newMovie, setnewMovie] = useState({
    id: movielist.length + 1,
    title: "",
    year: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    cast: "",
    summary: "",
    imageURL: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setmovielist([...movielist, newMovie]);
    setnewMovie({
      id: "",
      title: "",
      year: "",
      genre: "",
      rating: "",
      director: "",
      writer: "",
      cast: "",
      summary: "",
      imageURL: "",
    });
    alert("successfully added");
    navigate("/");
  };

  return (
    <form className="modal-box" onSubmit={handleSubmit}>
      <label>
        title :{" "}
        <input
          placeholder="title"
          value={newMovie.title}
          name="title"
          onChange={handleChange}
        />
      </label>
      <label>
        year:
        <input
          placeholder="year"
          onChange={handleChange}
          value={newMovie.year}
          name="year"
        />{" "}
      </label>
      <label>
        genre :
        <input
          placeholder="genre"
          onChange={handleChange}
          value={newMovie.genre}
          name="genre"
        />{" "}
      </label>
      <label>
        rating
        <input
          placeholder="rating"
          type="number"
          onChange={handleChange}
          value={newMovie.rating}
          name="rating"
        />{" "}
      </label>
      <label>
        director
        <input
          placeholder="director"
          onChange={handleChange}
          value={newMovie.director}
          name="director"
        />{" "}
      </label>
      <label>
        writer :
        <input
          placeholder="writer"
          onChange={handleChange}
          value={newMovie.writer}
          name="writer"
        />{" "}
      </label>
      <label>
        cast :
        <input
          placeholder="cast"
          onChange={handleChange}
          value={newMovie.cast}
          name="cast"
        />{" "}
      </label>
      <label>
        imageURL :
        <input
          placeholder="imageURL"
          onChange={handleChange}
          value={newMovie.imageURL}
          name="imageURL"
        />{" "}
      </label>
      <label>
        summary :
        <input
          placeholder="summary"
          onChange={handleChange}
          value={newMovie.summary}
          name="summary"
        />{" "}
      </label>

      <button>Save</button>
    </form>
  );
};

export default Modal;
