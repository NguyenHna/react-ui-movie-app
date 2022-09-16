import React from "react";
import { requests } from "../Component/GetAPI";
import Header from "../Component/Header";
import MovieList from "../Component/MovieList";

function Browse() {
  return (
    <div className="app container">
      <Header />
      <MovieList data={requests.fetchNetflixOriginals} />
      <MovieList data={requests.fetchTrending} />
      <MovieList data={requests.fetchTopRated} />
      <MovieList data={requests.fetchActionMovies} />
      <MovieList data={requests.fetchComedyMovies} />
      <MovieList data={requests.fetchHorrorMovies} />
      <MovieList data={requests.fetchRomanceMovies} />
      <MovieList data={requests.fetchDocumentaries} />
    </div>
  );
}

export default Browse;
