  

import { useEffect } from "react";
import { MOVIES_LIST } from "../utils/moviesList";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";




  const useGetMoviesData=()=>{

    const dispatch=useDispatch();

    // const getMoviesList= async ()=>{
  //   const res= await fetch('https://movies-api14.p.rapidapi.com/movies',MOVIES_OPTIONS);
  //   const resp= await res.json();
  //   console.log('resp',resp);
  //

    const getMoviesList=  ()=>{
    
        const resp= MOVIES_LIST;
        dispatch(addNowPlayingMovies(resp));
        
      }
    
    
      useEffect(()=>{
         getMoviesList();
      },[])

  }

  export default useGetMoviesData;
  