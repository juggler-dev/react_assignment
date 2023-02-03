import axios from "axios";
import qs from "qs";
import {
  APP_KEY,
  BASE_URL,
  NOW_PLAYING_MOVIES_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "../config/tmdb_api_config";

const fetchMoviesFromApi = async (selectedFilter) => {
  console.log(selectedFilter);

  const getTopRatedMovies = async () => {
    const url = BASE_URL + TOP_RATED_MOVIES_URL + "?api_key=" + APP_KEY;
    const fetchData = async () => {
      const apiCall = await fetch(url);
      const response = await apiCall.json();

      return response;
    };

    return await fetchData();
  };

  const getNowPlayingMovies = async () => {
    const url = BASE_URL + NOW_PLAYING_MOVIES_URL + "?api_key=" + APP_KEY;
    const fetchData = async () => {
      const apiCall = await fetch(url);
      const response = await apiCall.json();

      return response;
    };

    return await fetchData();
  };

  const getPopularMovies = async () => {
    const url = BASE_URL + POPULAR_MOVIES_URL + "?api_key=" + APP_KEY;
    const fetchData = async () => {
      const apiCall = await fetch(url);
      const response = await apiCall.json();

      return response;
    };

    return await fetchData();
  };

//  const swithFunction = async (filter) => {
//   switch(filter) {
//     case "top_rated":
//       return await getTopRatedMovies();
//     case "popular":
//       return await getPopularMovies();
//     case "now_playing":
//       return await getNowPlayingMovies();
//   } 

//  }
//   return await swithFunction(selectedFilter);

  return getPopularMovies();
};

export default fetchMoviesFromApi;
