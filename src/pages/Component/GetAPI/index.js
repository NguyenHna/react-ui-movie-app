const API_KEY = "3ddc86d696c56dec3bba53c922411fe7";
const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=3ddc86d696c56dec3bba53c922411fe7&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=3ddc86d696c56dec3bba53c922411fe7&with_network=123`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=3ddc86d696c56dec3bba53c922411fe7&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=3ddc86d696c56dec3bba53c922411fe7&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=3ddc86d696c56dec3bba53c922411fe7&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=3ddc86d696c56dec3bba53c922411fe7&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=3ddc86d696c56dec3bba53c922411fe7&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=3ddc86d696c56dec3bba53c922411fe7&with_genres=99`,
  fetchSearch: `https://api.themoviedb.org/3/search/movie?api_key=3ddc86d696c56dec3bba53c922411fe7&language=en-US`,
};
const urlImage = "https://image.tmdb.org/t/p/w500";


export { API_KEY, requests, urlImage };

