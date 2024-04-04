
import { useSelector } from "react-redux";
import useGetMoviesData from "../customHooks/useGetMoviesData";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";



const Browse = () => {

   useGetMoviesData();
    
    const movieList= useSelector(store=> store.movie?.nowPlayingMovies);

   console.log('use movie',movieList);
   if(!movieList) return ;
   const movieDesired= movieList[39];

  return (
    <div>
      <VideoTitle movieDetails={movieDesired}/>
      <VideoBackground trailerKey={movieDesired.trailerKey}/>
   
    </div>
  )
}

export default Browse
