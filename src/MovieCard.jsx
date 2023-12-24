import React from 'react';


const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      {/* Add your sidebar content here */}
    </div>
  );
};

export default MovieCard;