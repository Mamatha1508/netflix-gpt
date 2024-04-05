import { Link } from "react-router-dom"
import MovieCard from "./MovieCard"


const MovieList = ({title,movieList}) => {
  return (
    <div className="mt-12">
        <h1 className="font-bold text-white text-2xl mb-4 mx-4 mt-4">{title}</h1>
        <div  className="flex overflow-x-auto overflow-y-hidden	">
        
        <div className="flex">
        {
            movieList?.map((movie)=> <Link to={'/movie/'+ movie.movieLink}><MovieCard  movieInfo={movie}/></Link>)
        }
        </div>
       </div>
      
    </div>
  )
}

export default MovieList
