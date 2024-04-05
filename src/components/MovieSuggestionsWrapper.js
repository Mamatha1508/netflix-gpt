import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import SeriesList from "./SeriesList";
import { seriesList } from "../utils/seriesList";


const MovieSuggestionsWrapper = () => {

    const movieList= useSelector(store=>store.movie?.nowPlayingMovies);
    console.log('movie list in list',movieList);
  return (
    <div className="bg-black">
        <div className="mx-16 -mt-80 z-15 relative">

        <MovieList title={"Now Playing"} movieList={movieList}/>
        <SeriesList title={"Web Series"} seriesList={seriesList}/>
        <MovieList title={"Trending"} movieList={movieList}/>
        <MovieList title={"Popular"} movieList={movieList}/>
        </div>
      
    </div>
  )
}

export default MovieSuggestionsWrapper
