import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='9afe6d22c8796e7e2c1c3ba9d4a6ba8a'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=9afe6d22c8796e7e2c1c3ba9d4a6ba8a';

//https://api.themoviedb.org/3/trending/all/day?api_key=9afe6d22c8796e7e2c1c3ba9d4a6ba8a
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}