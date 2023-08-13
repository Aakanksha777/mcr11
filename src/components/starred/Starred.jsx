import React, { useContext } from "react";
import Cardlist from "../cardlist/Cardlist";
import { MovieContext } from "../context/MovieContext";

const Starred = () => {
  const { movielist } = useContext(MovieContext);
  const filterIsStarredList = movielist.filter((list) => list.isStar);
  return (
    <div>
      <Cardlist db={filterIsStarredList} />
    </div>
  );
};

export default Starred;
