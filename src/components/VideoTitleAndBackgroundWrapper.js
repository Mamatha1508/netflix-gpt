import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
import useGetMoviesData from "../customHooks/useGetMoviesData";


const VideoTitleAndBackgroundWrapper = () => {
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

export default VideoTitleAndBackgroundWrapper
